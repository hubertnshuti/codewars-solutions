export function solve(a: number, b: number, c: number, alpha: number, beta: number, gamma: number): number[] {
  const rad = Math.PI / 180
​
  const ax = a * Math.cos(alpha * rad)
  const ay = a * Math.sin(alpha * rad)
​
  const bx = ax + b * Math.cos((90 + beta) * rad)
  const by = ay + b * Math.sin((90 + beta) * rad)
​
  const cx = bx + c * Math.cos((180 + gamma) * rad)
  const cy = by + c * Math.sin((180 + gamma) * rad)
​
  const dist = Math.round(Math.hypot(cx, cy))
​
  let angle = Math.atan2(cy, cx) * 180 / Math.PI
  if (angle < 0) angle += 360
​
  const deg = Math.trunc(angle)
  const minFloat = (angle - deg) * 60
  const min = Math.trunc(minFloat)
  const sec = Math.trunc((minFloat - min) * 60)
​
  return [dist, deg, min, sec]
}