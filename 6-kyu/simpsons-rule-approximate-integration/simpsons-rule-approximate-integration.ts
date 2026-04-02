export function simpson(n: number): number {
  const pi = Math.PI;
  const h = pi / n;
​
  const f = (x: number): number => 1.5 * Math.pow(Math.sin(x), 3);
​
  let sum = f(0) + f(pi);
​
  for (let i = 1; i < n; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * f(i * h);
  }
​
  return (h / 3) * sum;
}