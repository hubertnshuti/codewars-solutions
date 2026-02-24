export function arrange(strng: string): string {
  if (strng.length === 0) return "";
  
  const words = strng.split(" ");
  
  for (let i = 0; i < words.length - 1; i++) {
    const shouldBeAscending = i % 2 === 0;
    
    if (shouldBeAscending) {
      if (words[i].length > words[i + 1].length) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    } else {
      if (words[i].length < words[i + 1].length) {
        [words[i], words[i + 1]] = [words[i + 1], words[i]];
      }
    }
  }
  
  return words
    .map((w, i) => i % 2 === 0 ? w.toLowerCase() : w.toUpperCase())
    .join(" ");
}