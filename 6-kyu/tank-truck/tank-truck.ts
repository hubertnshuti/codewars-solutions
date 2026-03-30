export function tankvol(h: number, d: number, vt: number): number {
  const r = d / 2
  const area = r * r * Math.acos((r - h) / r) - (r - h) * Math.sqrt(2 * r * h - h * h)
  return Math.floor(vt * area / (Math.PI * r * r))
}