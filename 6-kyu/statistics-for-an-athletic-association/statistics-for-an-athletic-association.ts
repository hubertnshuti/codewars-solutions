export const stat = (s: string): string => {
  if (!s) return ""
​
  const toSeconds = (t: string) => {
    const [h, m, sec] = t.trim().split("|").map(Number)
    return h * 3600 + m * 60 + sec
  }
​
  const toTime = (n: number) => {
    const h = Math.floor(n / 3600)
    n %= 3600
    const m = Math.floor(n / 60)
    const s = n % 60
    return [h, m, s].map(v => String(v).padStart(2, "0")).join("|")
  }
​
  const arr = s.split(",").map(toSeconds).sort((a, b) => a - b)
  const range = arr[arr.length - 1] - arr[0]
  const average = Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length)
  const median = arr.length % 2
    ? arr[(arr.length - 1) / 2]
    : Math.floor((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2)
​
  return `Range: ${toTime(range)} Average: ${toTime(average)} Median: ${toTime(median)}`
}