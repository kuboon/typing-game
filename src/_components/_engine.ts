const KanaRomansDict: Record<string, string[]> = {};
const RomansKanaDict: Record<string, string> = {};
let LongestKana = 0;
let LongestRoman = 0;

export function loadRomajiDict(json: { [key: string]: string | string[] }) {
  for (const kana in json) {
    const val = json[kana];
    const arr = Array.isArray(val) ? val : [val];
    KanaRomansDict[kana] = arr;
    for (const roman of arr) {
      RomansKanaDict[roman] = kana;
    }
  }
  LongestKana = Object.keys(KanaRomansDict).reduce(
    (acc, cur) => acc.length > cur.length ? acc : cur,
    "",
  ).length;
  LongestRoman = Object.keys(RomansKanaDict).reduce(
    (acc, cur) => acc.length > cur.length ? acc : cur,
    "",
  ).length;
}

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
  let candidates: CharUnit[] = [];
  for (let l = Math.min(LongestKana, kana.length); l > 0; l--) {
    const k = kana.slice(0, l);
    if (k in KanaRomansDict) {
      if (input === "") {
        return { kana: k, roman: KanaRomansDict[k][0], state: "yet" };
      }
      KanaRomansDict[k].forEach((r) => candidates.push({ kana: k, roman: r }));
    }
  }
  if (candidates.length === 0) {
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
  let inputLen = 1;
  while (inputLen <= input.length) {
    const next = candidates.filter((c) =>
      c.roman.startsWith(input.slice(0, inputLen))
    );
    if (next.length === 0) {
      return {
        kana: candidates[0].kana,
        roman: candidates[0].roman,
        state: "ng",
        input,
      };
    }
    candidates = next;
    inputLen++;
  }
  return {
    kana: candidates[0].kana,
    roman: candidates[0].roman,
    state: "in",
    input,
  };
}
export function matchInput(
  input: string,
  correct: string,
): CharUnitWithInput[] {
  if (input.length === 0 && correct.length === 0) return [];
  const firstCorrect = correct[0];
  if (firstCorrect in KanaRomansDict) {
    return matchKana(input, correct);
  }
  const rest = matchInput(input.slice(1), correct.slice(1));
  if (firstCorrect === input[0]) {
    return [
      { kana: firstCorrect, roman: "", state: "ok" },
      ...rest,
    ];
  }
  if (input.length === 0) {
    return [
      { kana: firstCorrect, roman: "", state: "yet" },
      ...rest,
    ];
  }
  return [
    { kana: firstCorrect, roman: "", state: "ng", input: input[0] || "" },
    ...rest,
  ];
}
function matchKana(roman: string, kana: string): CharUnitWithInput[] {
  if (kana.length === 0) return [];
  for (let len = 1; len <= LongestRoman && len <= roman.length; len++) {
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
