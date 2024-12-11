import {
  loadRomajiDict,
  matchInput,
  test
} from "./_engine.ts";
import { assertEquals } from "@std/assert";
import { parse } from "@std/yaml/parse";

const { firstKanaMatch } = test

const RomajiYaml = parse(Deno.readTextFileSync("./src/_data/romaji.yaml"));
loadRomajiDict(RomajiYaml);

Deno.test("firstKanaMatch", async t => {
  const subject = (name: string, expected: unknown[]) => t.step(name, () => assertEquals(firstKanaMatch(name), expected));
  await subject("あかさ", [
    { kana: "あ", roman: "a" }
  ]);
  await subject("ふぁっしょん", [
    { kana: "ふぁ", roman: "fa" },
    { kana: "ふ", roman: "hu" },
    { kana: "ふ", roman: "fu" },
  ]);
});

Deno.test("matchInput", async t => {
  const subject = (input: string, kana: string, expected: unknown[]) => t.step(`${input},${kana}`, () => assertEquals(matchInput(input, kana), expected));
  await subject("wassya", "わっしゃー", [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssya", state: "ok" },
    { kana: "ー", roman: "-" },
  ]);
  await subject("waxtusya-", "わっしゃー", [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っ", roman: "xtu", state: "ok" },
    { kana: "しゃ", roman: "sya", state: "ok" },
    { kana: "ー", roman: "-", state: "ok" },
  ]);
  await subject("wassha-", "わっしゃー", [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssha", state: "ok" },
    { kana: "ー", roman: "-", state: "ok" },
  ]);
  await subject("wassh", "わっしゃー", [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssha", state: "in", input: "ssh" },
    { kana: "ー", roman: "-" },
  ]);
  await subject("xt", "っしょん。", [
    { kana: "っ", roman: "xtu", input: "xt", state: "in" },
    { kana: "しょ", roman: "sho", },
    { kana: "ん。", roman: "n.", },
  ]);
  await subject("ssho", "っしょん。", [
    { kana: "っしょ", roman: "ssho", state: "ok" },
    { kana: "ん。", roman: "n." }
  ]);
  await subject("ac", "abc", [
    { kana: "a", roman: "", state: "ok" },
    { kana: "b", roman: "", input: "c", state: "ng" },
    { kana: "c", roman: "" },
  ]);
  await subject("mi", "みえ", [
    { kana: "み", roman: "mi", state: "ok" },
    { kana: "え", roman: "e" },
  ]);
  await subject("paserr", "ぱせり", [
    { kana: "ぱ", roman: "pa", state: "ok" },
    { kana: "せ", roman: "se", state: "ok" },
    { kana: "り", roman: "ri", state: "ng", input: "rr" },
  ]);
});
