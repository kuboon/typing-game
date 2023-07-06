import Problems from "../_data/problems.yaml";
import RomajiField from "./RomajiField.tsx";

import { useSignal } from "https://esm.sh/@preact/signals?dev";

type QandA = { q: string; a: string };

function parseCsv(text: string) {
  return text.split("\n").map((x) => {
    const y = x.split(",");
    return { q: y[0], a: y[1].trim() };
  });
}

export default function GameMain() {
  const problems = useSignal(Problems as QandA[]);
  const hash = location.hash.slice(1);
  if (hash.length > 0) {
    fetch(hash).then((x) => x.text()).then(parseCsv).then((x) =>
      problems.value = x
    );
  }
  const currentNum = useSignal(0);
  const complete = () => {
    currentNum.value = (currentNum.value + 1) % problems.value.length;
  };
  const current = problems.value[currentNum.value];
  // const next = problems.value[(currentNum.value + 1) % problems.value.length]
  return (
    <div class="GameMain">
      <div class="current">
        <div class="question">{current.q}</div>
        <RomajiField answer={current.a} complete={complete} />
      </div>
    </div>
  );
}
