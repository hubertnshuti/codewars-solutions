export function choreAssignment(chores: number[]): number[] {
  const sorted = chores.slice().sort((a, b) => a - b);
  const res = [];
  let i = 0, j = sorted.length - 1;
​
  while (i < j) {
    res.push(sorted[i] + sorted[j]);
    i++;
    j--;
  }
​
  return res.sort((a, b) => a - b);
}