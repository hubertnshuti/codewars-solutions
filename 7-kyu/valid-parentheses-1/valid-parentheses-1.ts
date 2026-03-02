export function validParentheses(parenStr: string): boolean {
  let count = 0;
​
  for (const char of parenStr) {
    if (char === '(') {
      count++;
    } else {
      count--;
    }
​
    // more closing than opening
    if (count < 0) {
      return false;
    }
  }
​
  // all opened must be closed
  return count === 0;
}