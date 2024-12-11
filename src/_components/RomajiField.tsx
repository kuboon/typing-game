import RomajiYaml_ from "../_data/romaji.yaml" with { type: "json" };
import { loadRomajiDict, matchInput } from "./_engine.ts";
import { Hankaku } from "./_lib.ts";
import { signal, useEffect } from "../_deps.ts";
import { hint } from "./Keyboard.tsx";

loadRomajiDict(RomajiYaml_);

type Args = { answer: string; voice: boolean };
const input = signal("");
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Backspace") {
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
    }, [answer]);
  }
  const match = matchInput(answer, input.value);
  const nextUnit = match.find((x) => x.state !== "ok");
  if(!nextUnit) {
    input.value = "";
    match.length = 0;
    document.dispatchEvent(new Event("game:done"));
  } else if (nextUnit.state === "ng") {
    document.dispatchEvent(new Event("game:miss"));
    hint("Backspace");
    if(nextUnit.input.length>5) {
      const over = nextUnit.input.length - 5;
      input.value = input.value.slice(0, -over);
      nextUnit.input = nextUnit.input.slice(0, -over);
    }
  } else {
    const inputLength = (nextUnit.state === 'in') ? nextUnit.input.length : 0;
    const nextChar = nextUnit.roman.substring(inputLength, inputLength + 1) || nextUnit.kana;
    hint(nextChar);
    if (!nextUnit.state) nextUnit.state = "next";
  }

  return (
    <div class="answer">
      {match.map(({ kana, roman, state, input }) => (
        <ruby class={state || 'yet'}>
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
