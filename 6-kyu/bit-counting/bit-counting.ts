export function countBits(n: number): number {
  let count = 0;
  let big = BigInt(n);
​
  while (big > 0n) {
    count += Number(big & 1n);
    big = big >> 1n;
  }
​
  return count;
}
​