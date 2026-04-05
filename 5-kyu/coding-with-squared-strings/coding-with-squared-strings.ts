const pad = String.fromCharCode(11)
​
export const code = (s: string): string => {
  if (s === "") return ""
​
  let n = Math.ceil(Math.sqrt(s.length))
  while (s.length < n * n) s += pad
​
  let out: string[] = []
​
  for (let c = 0; c < n; c++) {
    let row = ""
    for (let r = n - 1; r >= 0; r--) {
      row += s[r * n + c]
    }
    out.push(row)
  }
​
  return out.join("\n")
}
​
export const decode = (s: string): string => {
  if (s === "") return ""
​
  let rows = s.split("\n")
  let n = rows.length
  let out = ""
​
  for (let c = n - 1; c >= 0; c--) {
    for (let r = 0; r < n; r++) {
      out += rows[r][c]
    }
  }
​
  while (out.endsWith(pad)) out = out.slice(0, -1)
  return out
}