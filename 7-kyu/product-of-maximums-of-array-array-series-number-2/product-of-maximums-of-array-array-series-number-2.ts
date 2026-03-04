export function maxProduct(numbers: number[], size: number): number {
  return numbers
    .slice()
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((prod, n) => prod * n, 1);
}