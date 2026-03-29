export function getScore(arr: number[]): number {
  let score = 0;
  let totalLines = 0;
  const points = [0, 40, 100, 300, 1200];
​
  for (const lines of arr) {
    score += points[lines] * (Math.floor(totalLines / 10) + 1);
    totalLines += lines;
  }
​
  return score;
}