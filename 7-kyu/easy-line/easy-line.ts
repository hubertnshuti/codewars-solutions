export function easyLine(n: number): number {
  let s = 0;
  for (let i = 1; i <= n; i++) s += Math.log(n + i) - Math.log(i);
  return Math.round(s);
}