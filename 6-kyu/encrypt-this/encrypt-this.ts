export const encryptThis = (str: string): string => {
​
  if (!str) return ''
​
  const encryptWord = (word: string): string => {
​
    const first = word.charCodeAt(0)
​
    if (word.length === 1) return `${first}`
    if (word.length === 2) return `${first}${word[1]}`
​
    const middle = word.slice(2, -1)
    const second = word[word.length - 1]
    const last = word[1]
​
    return `${first}${second}${middle}${last}`
  }
​
  return str.split(' ')
            .map(encryptWord)
            .join(' ')
}
​