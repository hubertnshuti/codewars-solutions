export function mirror(text: string): string {
  const words = text.split(' ')
  const reversed = words.map(w => w.split('').reverse().join(''))
  const maxLen = Math.max(...reversed.map(w => w.length))
  const border = '*'.repeat(maxLen + 4)
​
  const lines = reversed.map(w => {
    const padded = w + ' '.repeat(maxLen - w.length)
    return '* ' + padded + ' *'
  })
​
  return [border, ...lines, border].join('\n')
}