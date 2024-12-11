const KanaRomansDict: Record<string, string[]> = {};
const RomansKanaDict: Record<string, string> = {};
let LongestKana = 0;
// let LongestRoman = 0;

export function loadRomajiDict(json_: unknown) {
  const json = json_ as { [key: string]: string | string[] }
  for (const kana in json) {
    const val = json[kana];
    const arr = Array.isArray(val) ? val : [val];
    KanaRomansDict[kana] = arr;
    for (const roman of arr) {
      RomansKanaDict[roman] = kana;
    }
  }
  LongestKana = Math.max(...Object.keys(KanaRomansDict).map(x => x.length));
  // LongestRoman = Math.max(...Object.keys(RomansKanaDict).map(x => x.length));
}

type CharUnit = {
  kana: string;
  roman: string;
};
type CharUnitWithInput =
  (CharUnit & {
    state: "in" | "ng";
    input: string;
  }) |
  (CharUnit & {
    state: "yet" | "ok";
    input?: string;
  }) |
  CharUnit & {
    state?: "next";
    input?: string;
  };

function firstKanaMatch(
  correct: string,
): CharUnit[] {
  const candidates: CharUnit[] = [];
  for (let l = Math.min(LongestKana, correct.length); l > 0; l--) {
    const kana = correct.slice(0, l);
    const romans = KanaRomansDict[kana];
    if (romans) {
      romans.forEach((roman) => candidates.push({ kana, roman }));
    }
  }
  return candidates
}

export function matchInput(
  input: string,
  correct: string,
): CharUnitWithInput[] {
  if (correct.length === 0) return [];
  const candidates = firstKanaMatch(correct)
  if (input.length === 0) {
    const candidate = candidates[0] || { kana: correct[0], roman: "" };
    return [
      candidate,
      ...matchInput("", correct.slice(candidate.kana.length)),
    ]
  }
  if (candidates.length === 0) {
    if (input[0] === correct[0]) {
      return [
        { kana: correct[0], roman: "", state: "ok" },
        ...matchInput(input.slice(1), correct.slice(1)),
      ];
    } else {
      return [
        { kana: correct[0], roman: "", state: "ng", input },
        ...matchInput("", correct.slice(1)),
      ];
    }
  }
  for (const { kana, roman } of candidates) {
    if (input.startsWith(roman)) {
      return [
        { kana, roman, state: "ok" },
        ...matchInput(input.slice(roman.length), correct.slice(kana.length)),
      ];
    }
    if (roman.startsWith(input)) {
      return [
        { kana, roman, state: "in", input },
        ...matchInput("", correct.slice(kana.length)),
      ];
    }
  }
  return [
    { kana: candidates[0].kana, roman: candidates[0].roman, state: "ng", input },
    ...matchInput("", correct.slice(candidates[0].kana.length)),
  ]
}

export const test = { firstKanaMatch }
