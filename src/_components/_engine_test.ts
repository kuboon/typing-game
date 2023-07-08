import { assertEquals } from "deno/std/testing/asserts.ts";
import { loadRomajiDict, kanaToRomanChars, matchInput, firstLongestKanaMatch } from "./_engine.ts";
import { parse } from "deno/std/yaml/parse.ts"
const RomajiYaml_ = parse(Deno.readTextFileSync('./src/_data/romaji.yaml'))
loadRomajiDict(RomajiYaml_ as any)

Deno.test("kanaToRomanChars", () => {
  assertEquals(kanaToRomanChars("あかさ"), [
    { kana: "あ", roman: "a", state: "yet" },
    { kana: "か", roman: "ka", state: "yet" },
    { kana: "さ", roman: "sa", state: "yet" },
  ]);
  assertEquals(kanaToRomanChars("きっかけ"), [
    { kana: "き", roman: "ki", state: "yet" },
    { kana: "っか", roman: "kka", state: "yet" },
    { kana: "け", roman: "ke", state: "yet" },
  ]);
  assertEquals(kanaToRomanChars("ふぁっしょん。"), [
    { kana: "ふぁ", roman: "fa", state: "yet" },
    { kana: "っしょ", roman: "ssho", state: "yet" },
    { kana: "ん。", roman: "n.", state: "yet" },
  ]);
});

Deno.test("matchInput", () => {
  assertEquals(matchInput("wassya-", "わっしゃー"), [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssya", state: "ok" },
    { kana: "ー", roman: "-", state: "ok" },
  ]);
  assertEquals(matchInput("waxtusya-", "わっしゃー"), [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っ", roman: "xtu", state: "ok" },
    { kana: "しゃ", roman: "sya", state: "ok" },
    { kana: "ー", roman: "-", state: "ok" },
  ]);
  assertEquals(matchInput("wassha-", "わっしゃー"), [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssha", state: "ok" },
    { kana: "ー", roman: "-", state: "ok" },
  ]);
  assertEquals(matchInput("wassh", "わっしゃー"), [
    { kana: "わ", roman: "wa", state: "ok" },
    { kana: "っしゃ", roman: "ssha", state: "in", input: "ssh" },
    { kana: "ー", roman: "-", state: "yet" },
  ]);
});
Deno.test("xtu", () => {
  assertEquals(firstLongestKanaMatch("っしょん。", "xt"),
    { kana: 'っ', roman: 'xtu', input: 'xt', state: 'in'})
});
Deno.test("alphabet", () => {
  assertEquals(matchInput("ac", "abc"), [
    { kana: 'a', roman: '', state: 'ok'},
    { kana: 'b', roman: '', input: 'c', state: 'ng'},
    { kana: 'c', roman: '', state: 'yet'}
  ])
})
Deno.test({name: "みえ", fn() {
  assertEquals(matchInput("mie", "みえ"), [
    { kana: 'み', roman: 'mi', state: 'ok'},
    { kana: 'え', roman: 'e', state: 'ok'}
  ])
}})
