export function game(n: number): number[] {
  const a = n * n
  return a % 2 === 0 ? [a / 2] : [a, 2]
}