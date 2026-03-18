export function validBraces(braces: string): boolean {
  const stack: string[] = [];
​
  const pairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
​
  for (let char of braces) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
​
  return stack.length === 0;
}