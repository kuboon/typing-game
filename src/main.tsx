import GameMain from "./_components/GameMain.tsx";
import Keyboard from "./_components/Keyboard.tsx";
import { fetchProblems } from "./_lib/fetchProblems.ts";
import { csvUrlFromHash } from "./_lib/csvUrl.ts";
import { render } from "./_deps.ts";

const csv = csvUrlFromHash(location.hash);

const appElem = document.getElementById("app")!;
const probsSets = await fetchProblems(csv)
if (!probsSets.ok) {
  appElem.insertAdjacentHTML("beforeend", probsSets.errors.join("<br>"));
  throw new Error('failed to init');
}

const { problems, settings } = probsSets;
const App = (
  <>
    <GameMain problems={problems} settings={settings} />
    <details open>
      <summary>きーぼーど</summary>
      <Keyboard />
    </details>
  </>
);
render(App, appElem);
