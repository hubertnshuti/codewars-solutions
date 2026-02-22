export function partsSums(ls: number[]): number[] {
  const result: number[] = [];
  
  let total = ls.reduce((sum, value) => sum + value, 0);
​
  for (let i = 0; i < ls.length; i++) {
    result.push(total);
    total -= ls[i];
  }
​
  result.push(0);
​
  return result;
}