function sumDivs(n: number): number {
  if (n === 1) return 0
​
  let sum = 1
​
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i
      if (i * i !== n) sum += n / i
    }
  }
​
  return sum
}
​
export function buddy(start: number, limit: number): number[] {
  for (let n = start; n <= limit; n++) {
    let m = sumDivs(n) - 1
    if (m > n && sumDivs(m) === n + 1) return [n, m]
  }
​
  return []
}