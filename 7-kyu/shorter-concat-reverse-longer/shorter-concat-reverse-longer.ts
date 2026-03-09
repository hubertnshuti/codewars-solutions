export function shorterReverseLonger(a: string, b: string): string {
  const [shorter, longer] = a.length < b.length ? [a, b] : [b, a]
  return shorter + [...longer].reverse().join("") + shorter
}