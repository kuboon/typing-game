import RomajiYaml_ from "../_data/romaji.yaml";
const RomajiYaml = RomajiYaml_ as { [key: string]: string | string[] };
// import { parse } from "deno/std/yaml/parse.ts"
// const RomajiYaml = parse(Deno.readTextFileSync('./src/_data/romaji.yaml')) as { [key: string]: string | string[] }
const KanaRomansDict: Record<string, string[]> = {};
const RomansKanaDict: Record<string, string> = {};
for (const kana in RomajiYaml) {
  const val = RomajiYaml[kana];
  const arr = Array.isArray(val) ? val : [val];
  KanaRomansDict[kana] = arr;
  for (const roman of arr) {
    RomansKanaDict[roman] = kana;
  }
}
const LongestKana = Object.keys(KanaRomansDict).reduce(
  (acc, cur) => acc.length > cur.length ? acc : cur,
  "",
).length;
const LongestRoman = Object.keys(RomansKanaDict).reduce(
  (acc, cur) => acc.length > cur.length ? acc : cur,
  "",
).length;

type CharUnit = {
  kana: string;
  roman: string;
};
type CharUnitWithInput = CharUnit & {
  state: "ok" | "ng" | "in" | "yet";
  input?: string;
};

export function firstLongestKanaMatch(
  kana: string,
  input = "",
): CharUnitWithInput {
  for (let l = LongestKana; l > 0; l--) {
    const k = kana.slice(0, l);
    if (k in KanaRomansDict) {
      let candidates = KanaRomansDict[k];
      if (input === "") {
        return { kana: k, roman: candidates[0], state: "yet" };
      }
      let inputLen = 1;
      while (inputLen <= input.length) {
        const next = candidates.filter((c) =>
          c.startsWith(input.slice(0, inputLen++))
        );
        if (next.length === 0) {
          return { kana: k, roman: candidates[0], state: "ng", input };
        }
        candidates = next;
      }
      return { kana: k, roman: candidates[0], state: "in", input };
    }
  }
  if (input === "") {
    return { kana: kana[0], roman: kana[0], state: "yet" };
  }
  const correct = kana[0] === input[0];
  return {
    kana: kana[0],
    roman: input[0],
    state: correct ? "ok" : "ng",
    input: input[0],
  };
}
export function matchInput(roman: string, kana: string): CharUnitWithInput[] {
  if (kana.length === 0) return [];
  for (let len = 1; len <= LongestRoman; len++) {
    const r = roman.slice(0, len);
    if (r in RomansKanaDict) {
      const k = RomansKanaDict[r];
      const correct = kana.startsWith(k);
      if (correct) {
        return [
          { kana: k, roman: r, state: "ok" },
          ...matchInput(roman.slice(len), kana.slice(k.length)),
        ];
      }
    }
  }
  const nextChar = firstLongestKanaMatch(kana, roman);
  return [nextChar, ...kanaToRomanChars(kana.slice(nextChar.kana.length))];
}
export function kanaToRomanChars(kana: string): CharUnitWithInput[] {
  // repeat until kana is empty
  const result: CharUnitWithInput[] = [];
  while (kana.length > 0) {
    const romanChar = firstLongestKanaMatch(kana);
    if (romanChar) {
      result.push(romanChar);
      kana = kana.slice(romanChar.kana.length);
    } else {
      throw new Error(`No match for ${kana}`);
    }
  }
  return result;
}
// console.log(matchInput("fasshon.", "ふぁっしょん。"))
