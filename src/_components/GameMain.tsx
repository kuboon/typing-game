import RomajiField from "./RomajiField.tsx";
import { GameSettings } from "./_lib.ts";
import { h, Signal, useEffect, useSignal } from "../_deps.ts";

type QandA = { q: string; a: string };
type GameMainState = "ready" | "playing";

function Timer({ timer }: { timer: Signal<number> }) {
  const timerId = useSignal<null | number>(null);
  document.addEventListener("game:play", () => {
    timerId.value = setInterval(() => {
      timer.value--;
      if (timer.value <= 0 && timerId.value) {
        clearInterval(timerId.value);
        document.dispatchEvent(new Event("game:timeup"));
      }
    }, 1000);
  });
  document.addEventListener("game:over", () => {
    if (timerId.value) {
      clearInterval(timerId.value);
      timerId.value = null;
    }
  });
  return <div class="timer">のこり: {timer} びょう</div>;
}

function addScoreGetAnimation(pt: number) {
  const el = document.createElement("div");
  el.classList.add("score_get");
  el.textContent = `+${pt}`;
  document.body.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 2000);
}

export default function GameMain(
  { problems, settings }: { problems: QandA[]; settings: GameSettings },
) {
  const currentNum = useSignal(0);
  const state = useSignal<GameMainState>("ready");
  const score = useSignal(0);
  const combo = useSignal(0);
  const timer = useSignal(settings.timelimit);

  const play = () => {
    currentNum.value = 0;
    score.value = 0;
    combo.value = 1;
    timer.value = settings.timelimit;
    state.value = "playing";
    document.dispatchEvent(new Event("game:play"));
  };
  const gameover = () => {
    state.value = "ready";
    combo.value = 0;
    document.dispatchEvent(new Event("game:over"));
  };

  useEffect(() => {
    document.addEventListener("game:timeup", gameover);
    document.addEventListener("game:miss", () => {
      combo.value = 1;
      const current = problems[currentNum.value];
      if (problems.at(-1) != current) {
        problems.push(current);
      }
    });
    document.addEventListener("game:done", () => {
      currentNum.value = currentNum.value + 1;
      if (currentNum.value < problems.length) {
        score.value += combo.value;
        addScoreGetAnimation(combo.value);
        if (combo.value < 16) combo.value *= 2;
        return;
      }
      score.value += timer.value;
      currentNum.value = 0;
      gameover();
    });
  }, []);
  const current = problems[currentNum.value];
  const question = current.q.match(/^https?:/) ? <img src={current.q} /> : current.q;
  const next = problems[currentNum.value + 1]
  if(next && next.q.match(/^https?:/)) {
    new Image().src = next.q; // preload
  }
  return (
    <div class={state}>
      <header>
        <h1>たいぴすたん</h1>
        <h2>{settings.title}</h2>
        <a href="/inst/">あそびかた</a>
      </header>
      <div class="GameMain">
        <div class="score_block">
          <Timer timer={timer} />
          <div class="score">とくてん: {score}</div>
        </div>
        {state.value === "ready" &&
          (
            <div class="question">
              <button type="button" onClick={play}>はじめる</button>
            </div>
          )}
        {state.value === "playing" &&
          (
            <>
              <div class="question">{question}</div>
              <RomajiField answer={current.a} key={current.a} />
            </>
          )}
      </div>
    </div>
  );
}
