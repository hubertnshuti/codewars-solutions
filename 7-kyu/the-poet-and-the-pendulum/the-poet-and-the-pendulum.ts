export function pendulum(values: number[]) {
  const sorted = values.slice().sort((a, b) => a - b);
  const left: number[] = [];
  const right: number[] = [];
​
  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) left.unshift(sorted[i]);
    else right.push(sorted[i]);
  }
​
  return left.concat(right);
}