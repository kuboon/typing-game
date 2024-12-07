// PCG-XSH-RR
const mask64 = (1n << 64n) - 1n
const mask32 = (1n << 32n) - 1n
const mult = 6364136223846793005n

export class PCG {
  private state: bigint;
  private inc: bigint;

  constructor(seed = 0x4d595df4d0f33173n) {
    this.state = seed;
    this.inc = (BigInt(seed) << 1n) | 1n;
  }

  next() {
    let x = this.state;
    const rot = x >> 59n;

    this.state = (this.state * mult + this.inc) & mask64;
    x ^= x >> 18n;
    const word = x >> 27n;
    return (word >> rot) | (word << (32n - rot)) & mask32;
  }

  nextInt(max: number) {
    return Number(this.next()) % max;
  }
}
