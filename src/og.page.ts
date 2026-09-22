// og.kbn.one 用テンプレ。比率ごとに画像を出し分けるため JSON 形式で出力する。
// 仕様: https://og.kbn.one/
const dir = new URL("./_og/", import.meta.url);
const read = (name: string) => Deno.readTextFileSync(new URL(name, dir));

export const url = "/og.json";

export default function () {
  return JSON.stringify({
    vars: { score: "0", title: "" },
    fonts: ["M PLUS Rounded 1c:800"],
    url: "https://typing.kbn.one/#v=2&fetch={{fetch}}",
    og: {
      site_name: "たいぴすたん",
      title: "たいぴすたん {{title}} とくてん {{score}}",
      description:
        "ブラウザであそべる ひらがなタイピングゲーム。きみもちょうせんしてみよう！",
    },
    images: [read("wide.svg"), read("square.svg")],
  });
}
