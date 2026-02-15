export function thirt(n: number): number {
  const pattern: number[] = [1, 10, 9, 12, 3, 4];
​
  let previous = -1;
  let current = n;
​
  while (current !== previous) {
    previous = current;
​
    let temp = current;
    let sum = 0;
    let index = 0;
​
    while (temp > 0) {
      const digit = temp % 10;          // get rightmost digit
      sum += digit * pattern[index % pattern.length];
      temp = Math.floor(temp / 10);     // remove rightmost digit
      index++;
    }
​
    current = sum;
  }
​
  return current;
}
​