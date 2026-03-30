export function rank(st: string, we: number[], n: number): string {
  if (!st) return "No participants"
  
  const names = st.split(",")
  if (n > names.length) return "Not enough participants"
​
  const scores = names.map((name, i) => {
    const som = name.length + [...name.toLowerCase()].reduce((a, c) => a + c.charCodeAt(0) - 96, 0)
    return { name, score: som * we[i] }
  })
​
  scores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
​
  return scores[n - 1].name
}