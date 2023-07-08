import RomajiField from "./RomajiField.tsx";
import { useEffect } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.development.js";
import { useSignal } from "https://esm.sh/@preact/signals?dev";
import type { Signal } from "https://esm.sh/@preact/signals?dev";

type QandA = { q: string; a: string };
type GameMainState = "ready" | "playing";

function Timer({ timer }: { timer: Signal<number> }) {
  const timerId = useSignal<null | number>(null)
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
  document.addEventListener('game:over', () => {
    if (timerId.value) {
      clearInterval(timerId.value);
      timerId.value = null;
    }
  });


  return <div class='timer'>のこり: {timer} びょう</div>
}

export default function GameMain({ problems }: { problems: QandA[] }) {
  const state = useSignal("ready" as GameMainState);
  const currentNum = useSignal(0);
  const score = useSignal(0);
  const combo = useSignal(0);
  const timer = useSignal(60);


  const play = () => {
    currentNum.value = 0;
    score.value = 0;
    combo.value = 1;
    state.value = "playing";
    document.dispatchEvent(new Event('game:play'));
  };
  const gameover = () => {
    state.value = "ready";
    combo.value = 0;
    document.dispatchEvent(new Event('game:over'));
  }

  useEffect(() => {
    document.addEventListener('game:timeup', gameover);
    document.addEventListener('game:miss', () => {
      combo.value = 1;
      const current = problems[currentNum.value];
      if (problems.at(-1) != current) {
        problems.push(current);
      }
    });
    document.addEventListener('game:done', () => {
      currentNum.value = currentNum.value + 1
      if (currentNum.value < problems.length) {
        score.value += combo.value;
        if (combo.value < 16) combo.value *= 2;
        return
      }
      score.value += timer.value
      gameover()
    });
  }, []);
  const current = problems[currentNum.value];
  // const next = problems.value[(currentNum.value + 1) % problems.value.length]
  return (
    <div class={state}>
      <header>
        <h1>たいぴすたん</h1>
      </header>
      <div class="GameMain">
        <div class="header">
          <div class="score">とくてん: {score} {combo.value > 0 && `[+${combo}]`}</div>
          <Timer timer={timer} /></div>
        {state.value === "ready" &&
          <div class="question">
          <button type='button' onClick={play}>はじめる</button>
          </div>
        }
        {state.value === "playing" &&
          <>
            <div class="question">{current.q}</div>
            <RomajiField answer={current.a} />
          </>
        }
      </div>
    </div>
  );
}
