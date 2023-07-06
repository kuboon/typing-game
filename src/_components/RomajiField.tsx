import { useEffect, useState } from "https://esm.sh/preact/hooks?dev";
import { matchInput } from "./_engine.ts";

type Args = { answer: string; complete: () => void };

export default function RomajiField({ answer, complete }: Args) {
  const [input, setInput] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
  if (match.every((x) => x.state === "ok")) {
    setInput("");
    complete();
  }
  return (
    <div class="answer">
      {match.map(({ kana, roman, state, input }) => (
        <ruby class={state}>
          {kana}
          <rt>{input || roman}</rt>
        </ruby>
      ))}
    </div>
  );
}
