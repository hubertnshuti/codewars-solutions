export const phone = (strng: string, num: string): string => {
  let lines = strng.split("\n").filter(x => x.includes(num))
​
  if (lines.length === 0) return `Error => Not found: ${num}`
  if (lines.length > 1) return `Error => Too many people: ${num}`
​
  let line = lines[0]
​
  let name = line.split("<")[1].split(">")[0]
​
  let address = line
    .replace(`<${name}>`, "")
    .replace("+" + num, "")
    .replace(/[^a-zA-Z0-9.\- ]/g, " ")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
​
  return `Phone => ${num}, Name => ${name}, Address => ${address}`
}