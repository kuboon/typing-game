import { assertEquals, assertNotEquals } from "@std/assert";
import { PCG } from "./pcg.ts";

Deno.test("PCG determinism", async (t) => {
  await t.step("same seed produces same sequence", () => {
    const rng1 = new PCG(42n);
    const rng2 = new PCG(42n);
    for (let i = 0; i < 100; i++) {
      assertEquals(rng1.next(), rng2.next());
    }
  });

  await t.step("different seeds produce different sequences", () => {
    const rng1 = new PCG(1n);
    const rng2 = new PCG(2n);
    // Collect first 10 values; at least one should differ
    const vals1 = Array.from({ length: 10 }, () => rng1.next());
    const vals2 = Array.from({ length: 10 }, () => rng2.next());
    assertNotEquals(vals1, vals2);
  });

  await t.step("default seed is deterministic", () => {
    const rng1 = new PCG();
    const rng2 = new PCG();
    assertEquals(rng1.next(), rng2.next());
    assertEquals(rng1.next(), rng2.next());
  });
});

Deno.test("PCG.nextInt", async (t) => {
  await t.step("output is within range [0, max)", () => {
    const rng = new PCG(123n);
    for (let i = 0; i < 200; i++) {
      const val = rng.nextInt(10);
      assertEquals(val >= 0, true, `Expected >= 0, got ${val}`);
      assertEquals(val < 10, true, `Expected < 10, got ${val}`);
    }
  });

  await t.step("nextInt(1) always returns 0", () => {
    const rng = new PCG(99n);
    for (let i = 0; i < 50; i++) {
      assertEquals(rng.nextInt(1), 0);
    }
  });

  await t.step("distribution covers the range", () => {
    const rng = new PCG(7n);
    const seen = new Set<number>();
    for (let i = 0; i < 1000; i++) {
      seen.add(rng.nextInt(5));
    }
    // With 1000 samples and max=5, all values 0-4 should appear
    assertEquals(seen.size, 5);
  });
});

Deno.test("PCG edge cases", async (t) => {
  await t.step("seed of 0n does not crash", () => {
    const rng = new PCG(0n);
    rng.next();
    rng.next();
    rng.nextInt(10);
  });
});
