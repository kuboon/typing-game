import GameMain from "./_components/GameMain.tsx";
import Keyboard from "./_components/Keyboard.tsx";
import { GameSettings } from "./_components/_lib.ts";
import { render } from "./_deps.ts";
import { PCG } from "./_lib/pcg.ts";

function parseCsv(csv: string) {
  return csv.split("\n")
    .map((x) => x.split(","))
    .map(([q, a]) => ({ q, a: a ? a.trim() : q }));
}

(async () => {
  const hash = location.hash.slice(1);
  let problems_;
  if (hash.length > 0) {
    problems_ = await fetch(hash).then((x) => x.text()).then(parseCsv).catch(
      console.error,
    );
  }
  problems_ = problems_ ||
    await fetch("/csv/default.csv").then((x) => x.text()).then(parseCsv);

  const settings: GameSettings = {
    title: "",
    timelimit: 60,
    shuffle: true,
    voice: false,
  };
  problems_.forEach(({ q, a }) => {
    if (!q.startsWith(":")) return;
    switch (q) {
      case ":title":
        settings.title = a;
        break;
      case ":timelimit":
        settings.timelimit = parseInt(a);
        break;
      case ":shuffle":
        settings.shuffle = a !== "false";
        break;
      case ":voice":
        settings.voice = a === "true";
        break;
    }
  });

  function shuffleArray(array: unknown[], rng: PCG) {
    for (let i = array.length - 1; i > 1; i--) {
      const j = rng.nextInt(i);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const problems = problems_.filter(({ q }) => !q.startsWith(":"));
  if (settings.shuffle) {
    const today = Math.floor(Date.now() / 86400000);
    const rng = new PCG(BigInt(today));
    shuffleArray(problems, rng);
  }
  const App = (
    <>
      <GameMain problems={problems} settings={settings} />
      <details open>
        <summary>きーぼーど</summary>
        <Keyboard />
      </details>
    </>
  );

  render(App, document.getElementById("app")!);
})();
