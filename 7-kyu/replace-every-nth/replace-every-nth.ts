export function replaceNth(text: string, n: number, oldValue: string, newValue: string): string {
  if (n <= 0) return text;
  let count = 0;
  let result = '';
​
  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldValue) {
      count++;
      if (count % n === 0) {
        result += newValue;
        continue;
      }
    }
    result += text[i];
  }
​
  return count < n ? text : result;
}