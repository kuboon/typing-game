export const Hankaku = Array.from({ length: 126 - 32 + 1 }, (_, i) => String.fromCharCode(i + 32)).join('');
// export const Omoji = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export type GameSettings = {
  title: string;
  timelimit: number;
  shuffle: boolean;
  voice: boolean;
};
export type QA = { q: string; a: string | null };
