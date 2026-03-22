export function sumin(n: number): number {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
​
export function sumax(n: number): number {
  return (n * (n + 1) * (4 * n - 1)) / 6;
}
​
export function sumsum(n: number): number {
  return n * n * (n + 1);
}