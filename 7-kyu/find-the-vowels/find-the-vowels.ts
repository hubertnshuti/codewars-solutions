export function vowelIndices(word: string): number[] {
  const indices: number[] = [];
  const vowels = "aeiouyAEIOUY";
  
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      indices.push(i + 1);
    }
  }
  
  return indices;
}