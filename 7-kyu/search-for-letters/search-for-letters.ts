export function change(string: string): string {
  const s = string.toLowerCase();
  let result = "";
​
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i); // 97 = 'a'
    result += s.includes(letter) ? "1" : "0";
  }
​
  return result;
}