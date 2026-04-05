function gcd(a: number, b: number): number {
  while (b !== 0) {
    let t = a % b
    a = b
    b = t
  }
  return a
}
​
export function decompose(n: string): string[] {
  if (n === "0") return []
​
  let num = 0
  let den = 1
​
  if (n.indexOf("/") !== -1) {
    let parts = n.split("/")
    num = Number(parts[0])
    den = Number(parts[1])
  } else if (n.indexOf(".") !== -1) {
    let parts = n.split(".")
    let a = parts[0]
    let b = parts[1]
    den = Math.pow(10, b.length)
    num = Number(a) * den + Number(b)
  } else {
    num = Number(n)
    den = 1
  }
​
  let g = gcd(num, den)
  num /= g
  den /= g
​
  let res: string[] = []
​
  if (num === 0) return res
​
  if (num >= den) {
    let whole = Math.floor(num / den)
    res.push(String(whole))
    num %= den
  }
​
  while (num > 0) {
    let unit = Math.ceil(den / num)
    res.push("1/" + unit)
​
    num = num * unit - den
    den = den * unit
​
    let g2 = gcd(num, den)
    num /= g2
    den /= g2
  }
​
  return res
}