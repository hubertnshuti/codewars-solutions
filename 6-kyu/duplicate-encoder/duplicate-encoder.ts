export function duplicateEncode(word: string): string {
  const lower = word.toLowerCase();
  const counts: Record<string, number> = {};
​
  // Count characters
  for (const char of lower) {
    counts[char] = (counts[char] || 0) + 1;
  }
​
  // Build result
  return lower
    .split('')
    .map(char => counts[char] === 1 ? '(' : ')')
    .join('');
}
​