export function byState(str: string): string {
  const states: Record<string, string> = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia"
  }
​
  const groups: Record<string, string[]> = {}
​
  for (const line of str.split(/\r?\n/).map(s => s.trim()).filter(Boolean)) {
    const parts = line.split(",").map(s => s.trim())
    const name = parts[0]
    const street = parts[1]
    const cityState = parts[2]
    const tokens = cityState.split(" ")
    const code = tokens[tokens.length - 1]
    const city = tokens.slice(0, -1).join(" ")
    const state = states[code]
    const entry = `${name} ${street} ${city} ${state}`
    ;(groups[state] ??= []).push(entry)
  }
​
  return Object.keys(groups)
    .sort()
    .map(state => [state, ...groups[state].sort().map(x => `..... ${x}`)].join("\r\n"))
    .join("\r\n ")
}