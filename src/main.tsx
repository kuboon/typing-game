import { render } from "https://esm.sh/preact?dev";
import GameMain from "./_components/GameMain.tsx";
import Keyboard from "./_components/Keyboard.tsx";

const App = () => (
  <>
    <GameMain />
    <details open>
      <summary>キーボード</summary>
      <Keyboard />
    </details>
  </>
);

if ("document" in window) {
  render(<App />, document.getElementById("main")!);
}
