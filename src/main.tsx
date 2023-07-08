import { render } from "https://esm.sh/preact?dev";
import GameMain from "./_components/GameMain.tsx";
import Keyboard from "./_components/Keyboard.tsx";

const App = ({ problems }: { problems: any }) => (
  <>
    <GameMain problems={problems} />
    <details>
      <summary>きーぼーど</summary>
      <Keyboard />
    </details>
  </>
);

function parseCsv(csv: string) {
  return csv.split("\n")
    .map(x => x.split(','))
    .filter(([q, a]) => q && a && a.length > 0)
    .map(([q, a]) => ({ q, a: a.trim() }));
}

(async () => {
  const hash = location.hash.slice(1);
  let problems;
  if (hash.length > 0) {
    problems = await fetch(hash).then((x) => x.text()).then(parseCsv).catch(console.error)
  }
  problems = problems || await fetch("/csv/todoufuken.csv").then((x) => x.text()).then(parseCsv)

  render(<App problems={problems}/>, document.getElementById("app")!);
})();
