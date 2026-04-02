export function revRot(s: string, sz: number): string {
  if (sz <= 0 || s === "" || sz > s.length) return ""
​
  let res = ""
​
  for (let i = 0; i + sz <= s.length; i += sz) {
    let chunk = s.slice(i, i + sz)
    let sum = 0
​
    for (let j = 0; j < chunk.length; j++) {
      let d = Number(chunk[j])
      sum += d * d * d
    }
​
    if (sum % 2 === 0) {
      res += chunk.split("").reverse().join("")
    } else {
      res += chunk.slice(1) + chunk[0]
    }
  }
​
  return res
}