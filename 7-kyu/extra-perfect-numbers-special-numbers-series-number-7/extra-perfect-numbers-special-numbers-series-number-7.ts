export function extraPerfect(n: number): number[] {
  const result: number[] = [];
​
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
​
  return result;
}