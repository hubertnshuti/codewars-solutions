export function newAvg(arr: number[], newavg: number): number {
  const sum = arr.reduce((a, b) => a + b, 0);
  const needed = newavg * (arr.length + 1) - sum;
  if (needed <= 0) throw new Error("Expected New Average is too low");
  return Math.ceil(needed);
}