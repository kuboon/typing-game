import RomajiField from "./RomajiField.tsx";
import { GameSettings, QA } from "../_lib/types.ts";
import { Signal, useEffect, useSignal } from "../_deps.ts";

type GameMainState = "ready" | "playing";

function Timer({ timer }: { timer: Signal<number> }) {
  if (timer.value == 0) return <></>;
  const timerId = useSignal<null | number>(null);
  useEffect(() => {
    const onPlay = () => {
      timerId.value = setInterval(() => {
        timer.value--;
        if (timer.value <= 0 && timerId.value) {
          clearInterval(timerId.value);
          document.dispatchEvent(new Event("game:timeup"));
        }
      }, 1000);
    };
    document.addEventListener("game:play", onPlay);

    const onOver = () => {
      if (timerId.value) {
        clearInterval(timerId.value);
        timerId.value = null;
      }
    };
    document.addEventListener("game:over", onOver);
    return () => {
      document.removeEventListener("game:play", onPlay);
      document.removeEventListener("game:over", onOver);
    };
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
  { problems, settings }: { problems: QA[]; settings: GameSettings },
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
    const onMiss = () => {
      combo.value = 1;
      const current = problems[currentNum.value];
      if (problems.at(-1) != current) {
        problems.push(current);
      }
    };
    document.addEventListener("game:miss", onMiss);
    const onDone = () => {
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
    };
    document.addEventListener("game:done", onDone);

    const onShare = async () => {
      let url = `https://ogp.kbn.one/typistan?score=${score.value}`;
      if (settings.title) {
        url = url + `&title=${encodeURIComponent(settings.title)}`;
      }
      const hash = location.hash.slice(1);
      if(hash.startsWith("v=2&")) {
        url = url + `&${hash}`;
      } else {
        url = url + `&csv=${location.hash.slice(1)}`;
      }
      await shareUrl(url);
    };
    document.getElementById("share")?.addEventListener("click", onShare);

    return () => {
      document.removeEventListener("game:timeup", gameover);
      document.removeEventListener("game:miss", onMiss);
      document.removeEventListener("game:done", onDone);
      document.getElementById("share")?.removeEventListener("click", onShare);
    };
  }, []);
  const current = problems[currentNum.value];
  const question = current.q.match(/^https?:/)
    ? <img src={current.q} />
    : current.q;
  const next = problems[currentNum.value + 1];
  if (next && next.q.match(/^https?:/)) {
    new Image().src = next.q; // preload
  }
  const showShareIcon = score.value > 0 && state.value == "ready";
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
          <div class="score">
            とくてん: {score}
            <span id="share" class={showShareIcon ? "show" : ""}>
              <a href="#">{share_icon}</a>
            </span>
          </div>
        </div>
        {state.value === "ready" &&
          (
            <div class="question">
              <button class="play" type="button" onClick={play}>
                はじめる
              </button>
            </div>
          )}
        {state.value === "playing" &&
          (
            <>
              <div class="question">{question}</div>
              <RomajiField
                answer={current.a || current.q}
                voice={settings.voice}
              />
            </>
          )}
      </div>
    </div>
  );
}

// <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
const share_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
    <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
  </svg>
);
async function shareUrl(url: string) {
  if (navigator.share) {
    await navigator.share({ url });
    return;
  }
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(url);
    alert("URLをコピーしました。");
    return;
  }
  const dialog = document.createElement("dialog");
  dialog.classList.add("share_dialog");
  dialog.open = true;
  dialog.innerHTML =
    `<form>このURLをコピーしてください。<button formmethod="dialog">x</button><br><input type="text" value="${url}"></form>`;
  dialog.addEventListener("close", () => {
    dialog.remove();
  });
  document.body.appendChild(dialog);
}
