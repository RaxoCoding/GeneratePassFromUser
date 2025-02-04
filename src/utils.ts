export function getTimestampSeed(interval: number = 10_000): number {
  // Get the current timestamp rounded to the interval (default: 10 seconds)
  return Math.floor(Date.now() / interval);
}