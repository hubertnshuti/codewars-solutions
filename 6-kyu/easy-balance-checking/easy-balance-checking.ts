export function balance(book: string) {
  let clean = book.replace(/[^a-zA-Z0-9.\n ]/g, "")
  let lines = clean.split("\n").filter(x => x.trim() !== "")
​
  let bal = parseFloat(lines[0])
  let res = ["Original Balance: " + bal.toFixed(2)]
​
  let total = 0
  let count = 0
​
  for (let i = 1; i < lines.length; i++) {
    let parts = lines[i].trim().split(/\s+/)
    let num = parts[0]
    let cat = parts[1]
    let amount = parseFloat(parts[2])
​
    bal -= amount
    total += amount
    count++
​
    res.push(num + " " + cat + " " + amount.toFixed(2) + " Balance " + bal.toFixed(2))
  }
​
  res.push("Total expense  " + total.toFixed(2))
  res.push("Average expense  " + (total / count).toFixed(2))
​
  return res.join("\r\n")
}