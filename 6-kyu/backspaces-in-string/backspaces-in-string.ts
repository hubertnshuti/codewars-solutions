export function cleanString(s: string): string {
  const stack: string[] = [];
​
  for (const char of s) {
    if (char === "#") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
​
  return stack.join("");
}