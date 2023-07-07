import { useEffect, useRef } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.development.js";
import RomajiField from "./RomajiField.tsx";
import { useSignal } from "https://esm.sh/@preact/signals?dev";

type QandA = { q: string; a: string };
type GameMainState = "ready" | "playing";

function Timer() {
  const timer = useSignal(60);
  const timerId = useSignal(null as null | number)
  document.addEventListener('game:play', () => {
    timer.value = 60;
    timerId.value = setInterval(() => {
      timer.value--;
      if (timer.value <= 0 && timerId.value) {
        clearInterval(timerId.value);
        document.dispatchEvent(new Event('game:timeup'));
      }
    }, 1000);
  });

  return <div class='timer'>じかん: {timer}</div>
}

export default function GameMain({ problems }: { problems: QandA[] }) {
  const state = useSignal("ready" as GameMainState);
  const currentNum = useSignal(0);
  const score = useSignal(0);
  const combo = useSignal(1);

  const play = () => {
    score.value = 0;
    combo.value = 1;
    state.value = "playing";
    document.dispatchEvent(new Event('game:play'));
  };

  useEffect(() => {
    document.addEventListener('game:timeup', () => {
      state.value = "ready";
      currentNum.value = 0;
    });
    document.addEventListener('game:miss', () => {
      combo.value = 1;
    });
    document.addEventListener('game:complete', () => {
      currentNum.value = (currentNum.value + 1) % problems.length;
      score.value += combo.value;
      if (combo.value < 16) combo.value *= 2;
    });
  }, []);
  const current = problems[currentNum.value];
  // const next = problems.value[(currentNum.value + 1) % problems.value.length]
  return (
    <div class="GameMain">
      <div class="header">
      <div class="score">とくてん: {score} [+{combo}]</div>
      <Timer /></div>
      {state.value === "ready" &&
        <button type='button' onClick={play}>はじめる</button>
      }
      {state.value === "playing" &&
        <>
          <div class="question">{current.q}</div>
          <RomajiField answer={current.a} />
        </>
      }
    </div>
  );
}
