export const countKprimes = (k: number, start: number, nd: number): number[] => {
  const res: number[] = []
  for (let i = start; i <= nd; i++) {
    let n = i, c = 0, d = 2
    while (d * d <= n) {
      while (n % d === 0) {
        n /= d
        c++
      }
      d++
    }
    if (n > 1) c++
    if (c === k) res.push(i)
  }
  return res
}
​
export const puzzle = (s: number): number => {
  const a = countKprimes(1, 2, s)
  const b = countKprimes(3, 2, s)
  const c = countKprimes(7, 2, s)
  const setC = new Set(c)
  let count = 0
  for (let x of a) {
    for (let y of b) {
      const z = s - x - y
      if (setC.has(z)) count++
    }
  }
  return count
}