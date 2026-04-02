export function dist(v: number, mu: number): number {
  let ms = v / 3.6
  return ms + (ms * ms) / (2 * mu * 9.81)
}
​
export function speed(d: number, mu: number): number {
  let g = 9.81
  let a = 1 / (2 * mu * g)
  let b = 1
  let c = -d
​
  let ms = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  return ms * 3.6
}