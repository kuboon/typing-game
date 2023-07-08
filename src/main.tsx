import GameMain from "./_components/GameMain.tsx";
import Keyboard from "./_components/Keyboard.tsx";
import { render } from "https://esm.sh/preact?dev";
import { GameSettings } from "./_components/_lib.ts";

function parseCsv(csv: string) {
  return csv.split("\n")
    .map(x => x.split(','))
    .filter(([q, a]) => q && a && a.length > 0)
    .map(([q, a]) => ({ q, a: a.trim() }));
}

(async () => {
  const hash = location.hash.slice(1);
  let problems_;
  if (hash.length > 0) {
    problems_ = await fetch(hash).then((x) => x.text()).then(parseCsv).catch(console.error)
  }
  problems_ = problems_ || await fetch("/csv/default.csv").then((x) => x.text()).then(parseCsv)

  const settings: GameSettings = {
    title: '',
    timelimit: 60,
    shuffle: false
  }
  problems_.forEach(({ q, a }) => {
    if (!q.startsWith(':')) return
    switch (q) {
      case ':title':
        settings.title = a
        break
      case ':timelimit':
        settings.timelimit = parseInt(a)
        break
      case ':shuffle':
        settings.shuffle = a === 'true'
        break
    }
  });

  const problems = problems_.filter(({ q }) => !q.startsWith(':'))
  if(settings.shuffle) problems.sort(() => Math.random() - 0.5)
  const App = <>
    <GameMain problems={problems} settings={settings} />
    <details>
      <summary>きーぼーど</summary>
      <Keyboard />
    </details>
  </>

  render(App, document.getElementById("app")!);
})();
