export function checkchoose(m: number, n: number): number {
  let c = 1
​
  for (let x = 0; x <= n; x++) {
    if (c === m) return x
    c = c * (n - x) / (x + 1)
  }
​
  return -1
}