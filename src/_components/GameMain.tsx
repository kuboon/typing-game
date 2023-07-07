import RomajiField from "./RomajiField.tsx";
import { useSignal } from "https://esm.sh/@preact/signals?dev";

type QandA = { q: string; a: string };

export default function GameMain({ problems }: { problems: QandA[] }) {
  const currentNum = useSignal(0);
  const complete = () => {
    currentNum.value = (currentNum.value + 1) % problems.length;
  };
  const current = problems[currentNum.value];
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
