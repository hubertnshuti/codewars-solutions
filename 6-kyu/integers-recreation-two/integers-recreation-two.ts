export const prod2sum = (a: number, b: number, c: number, d: number): number[][] => {
  const x1 = Math.abs(a * c + b * d)
  const y1 = Math.abs(a * d - b * c)
  const x2 = Math.abs(a * c - b * d)
  const y2 = Math.abs(a * d + b * c)
​
  const p1 = [Math.min(x1, y1), Math.max(x1, y1)]
  const p2 = [Math.min(x2, y2), Math.max(x2, y2)]
​
  if (p1[0] === p2[0] && p1[1] === p2[1]) return [p1]
  return [p1, p2].sort((u, v) => u[0] - v[0] || u[1] - v[1])
}