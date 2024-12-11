import type { GameSettings, QA } from "./types.ts";
import { PCG } from "./pcg.ts";

function parseCsv(csv: string, separator = ","): QA[] {
  return csv.split("\n")
    .map((x) => x.split(separator))
    .map(([q, a]) => ({ q, a }));
}
function parseSettings(problems: QA[]) {
  const settings: GameSettings = {
    title: "",
    timelimit: 60,
    shuffle: true,
    voice: false,
  };
  problems.forEach(({ q, a }) => {
    if (!q.startsWith(":")) return;
    if(a === null) return;
    switch (q) {
      case ":title":
        settings.title = a;
        break;
      case ":timelimit":
        settings.timelimit = parseInt(a);
        break;
      case ":shuffle":
        settings.shuffle = a !== "false";
        break;
      case ":voice":
        settings.voice = a === "true";
        break;
    }
  });
  return settings;
}
function shuffleArray(array: unknown[], rng: PCG) {
  for (let i = array.length - 1; i > 1; i--) {
    const j = rng.nextInt(i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function fetchProblems(url: string) {
  const errors: string[] = [];
  const separator = url.endsWith(".tsv") ? "\t" : ",";
  const response = await fetch(url)
  if (!response.ok) {
    return { ok: false as const, errors: [`Failed to fetch ${url}: ${response.statusText}`] };
  }
  const data = parseCsv(await response.text(), separator);
  const settings = parseSettings(data);
  const problems = data.filter(({ q }) => !q.startsWith(":"));

  if (settings.shuffle) {
    const today = Math.floor(Date.now() / 86400000);
    const rng = new PCG(BigInt(today));
    shuffleArray(problems, rng);
  }
  if (errors.length === 0) return { ok: true as const, problems, settings }
  return { ok: false as const, errors };
}
