export const travel = (r: string, zipcode: string): string => {
  if (!zipcode) return `${zipcode}:/`
  const addresses = r ? r.split(",") : []
  const streets: string[] = []
  const numbers: string[] = []
​
  for (const addr of addresses) {
    const a = addr.trim()
    if (!a.endsWith(zipcode)) continue
    const withoutZip = a.slice(0, -zipcode.length).trim()
    const firstSpace = withoutZip.indexOf(" ")
    numbers.push(withoutZip.slice(0, firstSpace))
    streets.push(withoutZip.slice(firstSpace + 1))
  }
​
  return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`
}