function factorsCount(n: number): number {
  let count = 0
  let d = 2
​
  while (d * d <= n) {
    while (n % d === 0) {
      count++
      n /= d
    }
    d++
  }
​
  if (n > 1) count++
  return count
}
​
export function kprimesStep(k: number, step: number, start: number, nd: number): number[][] {
  const nums: number[] = []
  const seen = new Set<number>()
  const res: number[][] = []
​
  for (let i = start; i <= nd; i++) {
    if (factorsCount(i) === k) {
      nums.push(i)
      seen.add(i)
    }
  }
​
  for (const x of nums) {
    if (seen.has(x + step)) res.push([x, x + step])
  }
​
  return res
}