import { alpha } from './preloaded';
​
export function blockPrint(input: string): string {
  const text = input.trim().toLowerCase()
  if (!text) return ''
​
  const rows: string[] = []
​
  for (let i = 0; i < 7; i++) {
    const line = text
      .split('')
      .map(ch => alpha[ch][i])
      .join(' ')
      .replace(/\s+$/g, '')
    rows.push(line)
  }
​
  return rows.join('\n')
}