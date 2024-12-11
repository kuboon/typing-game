import {
  loadRomajiDict,
  matchInput,
  test
} from "./engine.ts";
import { assertEquals } from "@std/assert";
import { parse } from "@std/yaml/parse";

const { firstKanaMatch } = test

const RomajiYaml = parse(Deno.readTextFileSync("./src/_data/romaji.yaml"));
loadRomajiDict(RomajiYaml);

type TC = Deno.TestContext;

Deno.test("firstKanaMatch", async t => {
  const expect = (expected: unknown[]) => (it: TC) => assertEquals(firstKanaMatch(it.name), expected);
  await t.step("あかさ", expect([
    { kana: "あ", roman: "a" }
  ]));
  await t.step("ふぁっしょん", expect([
    { kana: "ふぁ", roman: "fa" },
    { kana: "ふ", roman: "hu" },
    { kana: "ふ", roman: "fu" },
  ]));
});

Deno.test("matchInput", async t => {
  const expect = (expected: unknown[]) => (it: TC) => assertEquals(matchInput(it.parent!.name, it.name), expected);
  await t.step("わっしゃー", async t1 => {
    await t1.step("wassy", expect([
      { kana: "わ", roman: "wa", state: "ok" },
      { kana: "っしゃ", roman: "ssya", state: "in", input: "ssy" },
      { kana: "ー", roman: "-" },
    ]))
    await t1.step("wassye", expect([
      { kana: "わ", roman: "wa", state: "ok" },
      { kana: "っしゃ", roman: "ssya", state: "ng", input: "ssye" },
      { kana: "ー", roman: "-" },
    ]))
    await t1.step("wassya", expect([
      { kana: "わ", roman: "wa", state: "ok" },
      { kana: "っしゃ", roman: "ssya", state: "ok" },
      { kana: "ー", roman: "-" },
    ]))
    await t1.step("waltusha-", expect([
      { kana: "わ", roman: "wa", state: "ok" },
      { kana: "っ", roman: "ltu", state: "ok" },
      { kana: "しゃ", roman: "sha", state: "ok" },
      { kana: "ー", roman: "-", state: "ok" },
    ]))
  })

  await t.step("っしょん。", async t1 => {
    await t1.step("xt", expect([
      { kana: "っ", roman: "xtu", input: "xt", state: "in" },
      { kana: "しょ", roman: "sho", },
      { kana: "ん。", roman: "n.", },
    ]));
    await t1.step("ssho", expect([
      { kana: "っしょ", roman: "ssho", state: "ok" },
      { kana: "ん。", roman: "n." }
    ]));
  })

  await t.step('abc', async t1 => {
    await t1.step('ac', expect([
      { kana: "a", roman: "", state: "ok" },
      { kana: "b", roman: "", input: "c", state: "ng" },
      { kana: "c", roman: "" },
    ]))
  })
});
