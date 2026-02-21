export function minimumPercentage(foods: number[]): number {
​
  const sum = foods.reduce((a, b) => a + b, 0);
  const n = foods.length;
​
  return Math.max(0, sum - 100 * (n - 1));
}