export function epidemic(tm: number, n: number, s0: number, i0: number, b: number, a: number): number {
  const dt = tm / n
  let s = s0
  let i = i0
  let r = 0
  let maxInfected = i
​
  for (let k = 0; k < n; k++) {
    const nextS = s - dt * b * s * i
    const nextI = i + dt * (b * s * i - a * i)
    const nextR = r + dt * i * a
​
    s = nextS
    i = nextI
    r = nextR
​
    if (i > maxInfected) maxInfected = i
  }
​
  return Math.trunc(maxInfected)
}