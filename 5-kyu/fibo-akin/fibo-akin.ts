function build(n: number): number[] {
  let u = new Array(n + 1).fill(0)
  u[1] = 1
  u[2] = 1
​
  for (let i = 3; i <= n; i++) {
    u[i] = u[i - u[i - 1]] + u[i - u[i - 2]]
  }
​
  return u
}
​
export function lengthSupUK(n: number, k: number): number {
  let u = build(n)
  let count = 0
​
  for (let i = 1; i <= n; i++) {
    if (u[i] >= k) count++
  }
​
  return count
}
​
export function comp(n: number): number {
  let u = build(n)
  let count = 0
​
  for (let i = 2; i <= n; i++) {
    if (u[i] < u[i - 1]) count++
  }
​
  return count
}