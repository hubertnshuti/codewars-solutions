export function going(n: number): number {
  let s = 1
​
  for (let i = 2; i <= n; i++) {
    s = 1 + s / i
  }
​
  return Math.floor(s * 1000000) / 1000000
}