const KanaRomansDict: Record<string, string[]> = {};
let LongestKana = 0;

type TrieNode = string | { [key: string]: TrieNode };

export function loadRomajiDict(json_: unknown) {
  const trie = json_ as { [key: string]: TrieNode };
  // Walk the trie to reconstruct kana→romaji[] mapping
  function walk(node: { [key: string]: TrieNode }, prefix: string) {
    for (const char in node) {
      const val = node[char];
      const roman = prefix + char;
      if (typeof val === "string") {
        const kana = val;
        if (!KanaRomansDict[kana]) KanaRomansDict[kana] = [];
        KanaRomansDict[kana].push(roman);
      } else {
        walk(val, roman);
      }
    }
  }
  walk(trie, "");
  LongestKana = Math.max(...Object.keys(KanaRomansDict).map(x => x.length));
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

function longestMatch(str1: string, str2: string): number {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) { return i + 1; }
  }
  throw new Error("unreachable");
}

export function matchInput(
  correct: string,
  input = "",
): CharUnitWithInput[] {
  if (correct.length === 0) return [];
  const candidates = firstKanaMatch(correct)
  if (input.length === 0) {
    const candidate = candidates[0] || { kana: correct[0], roman: "" };
    return [
      candidate,
      ...matchInput(correct.slice(candidate.kana.length)),
    ]
  }
  if (candidates.length === 0) {
    // first letter is not kana
    if (input[0] === correct[0]) {
      return [
        { kana: correct[0], roman: "", state: "ok" },
        ...matchInput(correct.slice(1), input.slice(1)),
      ];
    } else {
      return [
        { kana: correct[0], roman: "", state: "ng", input },
        ...matchInput(correct.slice(1)),
      ];
    }
  }
  let longestMatched = { kana: "", roman: "", count: 0 };
  for (const { kana, roman } of candidates) {
    if (input.startsWith(roman)) {
      return [
        { kana, roman, state: "ok" },
        ...matchInput(correct.slice(kana.length), input.slice(roman.length)),
      ];
    }
    if (roman.startsWith(input)) {
      return [
        { kana, roman, state: "in", input },
        ...matchInput(correct.slice(kana.length)),
      ];
    }
    const length = longestMatch(roman, input)
    if (length > longestMatched.count) {
      longestMatched = { kana, roman, count: length };
    }
  }
  return [
    { kana: longestMatched.kana, roman: longestMatched.roman, state: "ng", input },
    ...matchInput(correct.slice(longestMatched.kana.length)),
  ]
}

export const test = { firstKanaMatch }
