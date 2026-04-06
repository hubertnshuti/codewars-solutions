export const perimeter = (n: number): number => {
  let a = 1, b = 1, sum = 1
  for (let i = 1; i <= n; i++) {
    sum += b
    ;[a, b] = [b, a + b]
  }
  return 4 * sum
}