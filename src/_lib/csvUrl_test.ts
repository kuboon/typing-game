import { assertEquals } from "@std/assert";
import { buildShareUrl, csvUrlFromHash, DEFAULT_CSV } from "./csvUrl.ts";

Deno.test("csvUrlFromHash", () => {
  assertEquals(csvUrlFromHash(""), DEFAULT_CSV);
  assertEquals(csvUrlFromHash("#"), DEFAULT_CSV);
  assertEquals(csvUrlFromHash("#/csv/english.csv"), "/csv/english.csv");
  assertEquals(csvUrlFromHash("/csv/english.csv"), "/csv/english.csv");
  assertEquals(
    csvUrlFromHash("#v=2&fetch=/csv/typescript.tsv"),
    "/csv/typescript.tsv",
  );
  assertEquals(
    csvUrlFromHash("#v=2&fetch=https%3A%2F%2Fexample.com%2Fa.csv%3Fgid%3D0%26output%3Dcsv"),
    "https://example.com/a.csv?gid=0&output=csv",
  );
  assertEquals(csvUrlFromHash("#v=2&fetch="), DEFAULT_CSV);
});

Deno.test("buildShareUrl", () => {
  const url = new URL(buildShareUrl({
    score: 12,
    title: "百人一首",
    csv: "https://example.com/a.csv?gid=0&output=csv",
  }));
  assertEquals(url.origin + url.pathname, "https://og.kbn.one/share");
  assertEquals(url.searchParams.get("tmpl"), "typing.kbn.one/og.json");
  assertEquals(url.searchParams.get("score"), "12");
  assertEquals(url.searchParams.get("title"), "百人一首");
  assertEquals(
    url.searchParams.get("fetch"),
    "https://example.com/a.csv?gid=0&output=csv",
  );

  const noTitle = new URL(buildShareUrl({ score: 1, title: "", csv: DEFAULT_CSV }));
  assertEquals(noTitle.searchParams.has("title"), false);
  assertEquals(noTitle.searchParams.get("fetch"), DEFAULT_CSV);
});
