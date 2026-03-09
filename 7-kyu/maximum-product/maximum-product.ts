export function adjacentElementsProduct(arr: number[]): number {
  return Math.max(...arr.slice(1).map((n, i) => n * arr[i]));
}