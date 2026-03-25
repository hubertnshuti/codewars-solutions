export function countRobots(a: string[]): string[] {
  const part = `[|};&#\\[\\]\\/<>\\(\\)*]`
  const robot = new RegExp(`[a-z]${part}{2}0${part}{2}0${part}{2}[a-z]`, 'gi')
​
  let automatik = 0
  let mechanik = 0
​
  for (const s of a) {
    const count = (s.match(robot) || []).length
​
    if (/automatik/i.test(s)) automatik += count
    if (/mechanik/i.test(s)) mechanik += count
  }
​
  return [
    `${automatik} robots functioning automatik`,
    `${mechanik} robots dancing mechanik`
  ]
}