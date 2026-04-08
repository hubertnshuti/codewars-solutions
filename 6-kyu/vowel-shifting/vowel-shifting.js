function vowelShift(text, n) {
  if (!text) return text
​
  const vowels = "aeiouAEIOU"
  const chars = text.split([])
  const vowelPositions = []
  const vowelChars = []
​
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (vowels.includes(char)) {
      vowelPositions.push(i)
      vowelChars.push(char)
    }
  }
​
  const count = vowelChars.length
  if (count === 0) return text
​
  const shift = ((n % count) + count) % count
​
  for (let i = 0; i < count; i++) {
    const targetIndex = vowelPositions[(i + shift) % count]
    chars[targetIndex] = vowelChars[i]
  }
​
  return chars.join("")
}