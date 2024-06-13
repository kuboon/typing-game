import RomajiYaml_ from "../_data/romaji.yaml";
import { loadRomajiDict, matchInput } from "./_engine.ts";
import { Hankaku } from "./_lib.ts";
import { signal, useEffect } from "../_deps.ts";
import { hint } from "./Keyboard.tsx";

loadRomajiDict(RomajiYaml_);

type Args = { answer: string; voice: boolean };
const input = signal("");
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "Backspace") {
    input.value = input.value.slice(0, -1);
    return;
  }
  if (Hankaku.includes(event.key)) {
    input.value = input.value + event.key;
  }
});

export default function RomajiField({ answer, voice }: Args) {
  useEffect(() => {
    input.value = "";
  }, []);
  if (voice) {
    useEffect(() => {
      const utterThis = new SpeechSynthesisUtterance(answer);
      speechSynthesis.speak(utterThis);
    }, []);
  }
  const match = matchInput(input.value, answer);
  if (match.some((x) => x.state === "ng")) {
    document.dispatchEvent(new Event("game:miss"));
  }
  if (match.every((x) => x.state === "ok")) {
    input.value = "";
    match.length = 0;
    document.dispatchEvent(new Event("game:done"));
  }
  const nextUnit = match.find((x) => x.state !== "ok");
  if (nextUnit) {
    if (nextUnit.state == "ng") {
      hint("Backspace");
    } else {
      const inputLength = nextUnit.input?.length || 0;
      const nextChar = nextUnit.roman.substring(inputLength, inputLength + 1) ||
        nextUnit.kana;
      hint(`key-${nextChar}`);
    }
  }
  return (
    <div class="answer">
      {match.map(({ kana, roman, state, input }) => (
        <ruby class={state}>
          {kana}
          <rt>
            <span class="input">{input}</span>
            <span class="roman">{roman.slice(input?.length || 0)}</span>
          </rt>
        </ruby>
      ))}
    </div>
  );
}
