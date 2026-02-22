export function calc(expr: string): number {
  if (expr.trim() === "") {
    return 0;
  }
​
  const stack: number[] = [];
  const tokens = expr.split(" ");
​
  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const right = stack.pop()!;
      const left = stack.pop()!;
​
      switch (token) {
        case "+": stack.push(left + right); break;
        case "-": stack.push(left - right); break;
        case "*": stack.push(left * right); break;
        case "/": stack.push(left / right); break;
      }
    } else {
      stack.push(parseFloat(token));
    }
  }
​
  return stack[0] || 0;
}