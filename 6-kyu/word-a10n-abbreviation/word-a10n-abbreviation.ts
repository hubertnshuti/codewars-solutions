export function abbreviate(str: string): string {
  return str.replace(/[A-Za-z]{4,}/g, (word) => {
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}