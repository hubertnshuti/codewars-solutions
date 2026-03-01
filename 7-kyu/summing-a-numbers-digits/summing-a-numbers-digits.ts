export function sumDigits(n: number): number {
  return Math.abs(n)
    .toString()
    .split('')
    .reduce((sum, d) => sum + parseInt(d), 0);
}