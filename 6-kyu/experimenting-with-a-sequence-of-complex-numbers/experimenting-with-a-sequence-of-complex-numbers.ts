export function f(x: number, y: number, eps: number): number {
  const r = Math.hypot(x, y)
​
  if (r > 1) return -1
  if (Math.abs(r - 1) < 1e-15) {
    if (Math.abs(x - 1) < 1e-15 && Math.abs(y) < 1e-15) return 1
    return -1
  }
  if (r === 0) return 1
​
  let n = Math.max(1, Math.ceil(Math.log(eps) / Math.log(r) - 1))
  while (Math.pow(r, n + 1) >= eps) n++
  while (n > 1 && Math.pow(r, n) < eps) n--
​
  return n
}