import { createHash } from "crypto";

export function hashUsername(username: string): string {
  return createHash("sha256").update(username).digest("hex");
}

export function pseudoRandom(seed: number, range: number): number {
  // Simple Linear Congruential Generator (LCG)
  seed = (seed * 1664525 + 1013904223) % 0x100000000;
  return seed % range;
}