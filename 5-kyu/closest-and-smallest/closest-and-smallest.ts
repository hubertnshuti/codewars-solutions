export function closest(strng: string): number[][] {
  if (!strng) return []
  const arr = strng.split(' ').map((v, i) => [
    v.split('').reduce((a, b) => a + +b, 0),
    i,
    +v
  ])
  arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let best = Infinity, res: number[][] = []
  for (let i = 1; i < arr.length; i++) {
    const d = arr[i][0] - arr[i - 1][0]
    if (d < best) {
      best = d
      res = [arr[i - 1], arr[i]]
    }
  }
  return res
}