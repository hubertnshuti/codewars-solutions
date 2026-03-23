export function solve(s: string): number {
  const n = s.length;
​
  for (let i = Math.floor(n / 2); i > 0; i--) {
    if (s.slice(0, i) === s.slice(n - i)) {
      return i;
    }
  }
​
  return 0;
}