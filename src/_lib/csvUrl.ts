export const DEFAULT_CSV = "/csv/default.csv";

/**
 * location.hash から問題 CSV の URL を求める。
 * 対応する形式:
 *   #v=2&fetch=URL   (v2)
 *   #URL             (旧形式)
 *   (なし)           → DEFAULT_CSV
 */
export function csvUrlFromHash(hash: string): string {
  const h = hash.startsWith("#") ? hash.slice(1) : hash;
  if (h.length === 0) return DEFAULT_CSV;
  if (h.startsWith("v=2&")) {
    return new URLSearchParams(h).get("fetch") || DEFAULT_CSV;
  }
  return h;
}

/**
 * og.kbn.one のシェア URL を組み立てる。
 * テンプレ (og.json) の url パターンが fetch から元のゲーム URL を復元する。
 */
export function buildShareUrl(
  { score, title, csv }: { score: number; title: string; csv: string },
): string {
  const share = new URL("https://og.kbn.one/share");
  share.searchParams.set("tmpl", "typing.kbn.one/og.json");
  share.searchParams.set("score", String(score));
  if (title) share.searchParams.set("title", title);
  share.searchParams.set("fetch", csv);
  return share.href;
}
