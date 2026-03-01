export function add(num1: number, num2: number): number {
  let a = num1.toString().split('').reverse();
  let b = num2.toString().split('').reverse();
  let max = Math.max(a.length, b.length);
  let result = '';
  for (let i = 0; i < max; i++) {
    let digit1 = i < a.length ? parseInt(a[i]) : 0;
    let digit2 = i < b.length ? parseInt(b[i]) : 0;
    result = (digit1 + digit2).toString() + result;
  }
  return parseInt(result);
}