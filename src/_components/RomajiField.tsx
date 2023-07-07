import RomajiYaml_ from "../_data/romaji.yaml";
import { useEffect, useState } from "https://esm.sh/preact/hooks?dev";
import { loadRomajiDict, matchInput } from "./_engine.ts";

loadRomajiDict(RomajiYaml_);

type Args = { answer: string; };

export default function RomajiField({ answer }: Args) {
  const [input, setInput] = useState("");
  const [hide, setHide] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (hide) setTimeout(()=>setHide(false), 1)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Backspace") {
      setInput((x: string) => x.slice(0, -1));
      return;
    }
    if ("abcdefghijklmnopqrstuvwxyz,.".includes(event.key)) {
      setInput((x: string) => x + event.key);
    }
  };
  const match = matchInput(input, answer);
  if (match.some((x) => x.state === "ng")) {
    document.dispatchEvent(new Event('game:miss'));
  }
  if (match.every((x) => x.state === "ok")) {
    setInput("");
    setHide(true)
    document.dispatchEvent(new Event('game:complete'));
  }
  return (
    <div class={['answer', hide ? '' : 'show'].join(' ')}>
      {match.map(({ kana, roman, state, input }) => (
        <ruby class={state}>
          {kana}
          <rt>
            <span class='input'>{input}</span>
            <span class='roman'>{roman.slice(input?.length || 0)}</span></rt>
        </ruby>
      ))}
    </div>
  );
}
