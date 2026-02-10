export function persistence(num: number): number {
  let count = 0;
​
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc * Number(digit), 1);
​
    count++;
  }
​
  return count;
}
​