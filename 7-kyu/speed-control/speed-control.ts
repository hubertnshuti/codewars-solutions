export function gps(s: number, x: number[]): number {
  if (x.length <= 1) return 0;
  let max = 0;
  for (let i = 1; i < x.length; i++) {
    const speed = Math.floor((3600 * (x[i] - x[i - 1])) / s);
    if (speed > max) max = speed;
  }
  return max;
}