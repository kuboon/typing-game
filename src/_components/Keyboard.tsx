import Keyboards from "../_data/keyboard.json" with { type: "json" };

function HalfCols({ count }: { count: number }) {
  return (
    <>
      {Array(count).fill(0).map(() => {
        return <div class="half"></div>;
      })}
    </>
  );
}

export default function Keyboard() {
  return (
    <div class="keyboard">
      {Keyboards["qwerty"].map((row: string, i: number) => {
        return (
          <div class="row">
            <HalfCols count={i} />
            {row.split("").map((key) => {
              if (key == " ") return <div class="key"></div>;
              if (key == "\\") {
                return <div class="key" id="key-Backspace">けす</div>;
              }
              return <div class="key" id={`key-${key.toLowerCase()}`}>{key}</div>;
            })}
            <HalfCols count={i} />
          </div>
        );
      })}
    </div>
  );
}
export function hint(code: string) {
  document.querySelectorAll(".key").forEach((elem) =>
    elem.classList.remove("hint")
  );
  const elem = document.getElementById(`key-${code}`);
  elem?.classList.add("hint");
}

document.addEventListener("keydown", (e) => {
  const key = document.getElementById(`key-${e.key}`);
  if (key) {
    key.classList.add("active");
  }
});
document.addEventListener("keyup", (e) => {
  const key = document.getElementById(`key-${e.key}`);
  if (key) {
    key.classList.remove("active");
  }
});
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("key")) {
    const key = target.id.match(/key-(.*)/)![1];
    console.log({key})
    document.dispatchEvent(new KeyboardEvent("keydown", { key }));
    setTimeout(
      () => document.dispatchEvent(new KeyboardEvent("keyup", { key })),
      200,
    );
  }
});
