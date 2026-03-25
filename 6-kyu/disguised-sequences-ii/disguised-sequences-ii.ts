function comb(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  k = Math.min(k, n - k)
  let res = 1
  for (let i = 1; i <= k; i++) {
    res = (res * (n - k + i)) / i
  }
  return res
}
​
export function v1(n: number, p: number): number {
  let sum = 0
  for (let k = 0; k <= n; k++) {
    sum += ((k % 2 === 0 ? 1 : -1) * p * Math.pow(4, n - k) * comb(2 * n - k, k))
  }
  return sum
}
​
export function u1(n: number, p: number): number {
  let sum = 0
  for (let k = 0; k <= n; k++) {
    sum += ((k % 2 === 0 ? 1 : -1) * p * Math.pow(4, n - k) * comb(2 * n - k + 1, k))
  }
  return sum
}
​
export function vEff(n: number, p: number): number {
  return p * (2 * n + 1)
}
​
export function uEff(n: number, p: number): number {
  return p * (n + 1)
}