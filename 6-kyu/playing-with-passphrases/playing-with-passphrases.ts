export function playPass(s: string, n: number): string {
  let res = ""
​
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
​
    if (ch >= "A" && ch <= "Z") {
      const code = ((ch.charCodeAt(0) - 65 + n) % 26) + 65
      let letter = String.fromCharCode(code)
      res += i % 2 === 0 ? letter : letter.toLowerCase()
    } else if (ch >= "0" && ch <= "9") {
      res += String(9 - Number(ch))
    } else {
      res += ch
    }
  }
​
  return res.split("").reverse().join("")
}