function isPrime(n: number): boolean {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
​
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false
  }
​
  return true
}
​
export function step(g: number, m: number, n: number): [number, number] | null {
  for (let i = m; i + g <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) return [i, i + g]
  }
​
  return null
}