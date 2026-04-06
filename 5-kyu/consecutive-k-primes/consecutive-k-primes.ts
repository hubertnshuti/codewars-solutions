export function consecKprimes(k: number, arr: number[]): number {
  const f = (n: number) => {
    let c = 0, d = 2
    while (d * d <= n) {
      while (n % d === 0) {
        n /= d
        c++
      }
      d++
    }
    if (n > 1) c++
    return c
  }
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if (f(arr[i]) === k && f(arr[i - 1]) === k) count++
  }
  return count
}