export function isSumOfCubes(s: string): string {
  const parts = (s.match(/\d+/g) || []).flatMap(x => x.match(/.{1,3}/g) || [])
  const found: number[] = []
​
  for (const part of parts) {
    const num = Number(part)
    const sum = part.split("").reduce((a, b) => a + Number(b) ** 3, 0)
    if (sum === num) found.push(num)
  }
​
  return found.length ? `${found.join(" ")} ${found.reduce((a, b) => a + b, 0)} Lucky` : "Unlucky"
}