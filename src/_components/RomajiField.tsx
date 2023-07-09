import RomajiYaml_ from "../_data/romaji.yaml";
import { loadRomajiDict, matchInput } from "./_engine.ts";
import { Hankaku } from "./_lib.ts";
import { useEffect, useState } from "https://esm.sh/preact/hooks?dev";

loadRomajiDict(RomajiYaml_);

type Args = { answer: string };

export default function RomajiField({ answer }: Args) {
  const [input, setInput] = useState("");
  const [hide, setHide] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (hide) setTimeout(() => setHide(false), 1);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Backspace") {
      setInput((x: string) => x.slice(0, -1));
      return;
    }
    if (Hankaku.includes(event.key)) {
      setInput((x: string) => x + event.key);
    }
  };
  const match = matchInput(input, answer);
  if (match.some((x) => x.state === "ng")) {
    document.dispatchEvent(new Event("game:miss"));
  }
  if (match.every((x) => x.state === "ok")) {
    setInput("");
    setHide(true);
    document.dispatchEvent(new Event("game:done"));
  }
  const nextUnit = match.find((x) => x.state !== "ok");
  if (nextUnit) {
    let id;
    if (nextUnit.state == "ng") {
      id = "Backspace";
    } else {
      const inputLength = nextUnit.input?.length || 0;
      const nextChar = nextUnit.roman.substring(inputLength, inputLength + 1);
      console.log({ inputLength, nextChar });
      id = `key-${nextChar}`;
    }
    document.querySelectorAll(".key").forEach((elem) =>
      elem.classList.remove("hint")
    );
    const elem = document.getElementById(id);
    elem?.classList.add("hint");
  }
  return (
    <div class={["answer", hide ? "" : "show"].join(" ")}>
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
