export function solve(s: string): string {
  let upper = 0;
  let lower = 0;
​
  for (const char of s) {
    if (char >= 'A' && char <= 'Z') upper++;
    else if (char >= 'a' && char <= 'z') lower++;
  }
​
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}