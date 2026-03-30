export function fortune(f0: number, p: number, c0: number, n: number, i: number): boolean {
  let f = f0
  let c = c0
​
  for (let year = 1; year < n; year++) {
    f = Math.trunc(f + f * p / 100 - c)
    if (f < 0) return false
    c = Math.trunc(c + c * i / 100)
  }
​
  return true
}