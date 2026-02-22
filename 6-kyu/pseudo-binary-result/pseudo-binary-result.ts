export function pseudoBinary(n: bigint): bigint {
  const queue: bigint[] = [];
  let head = 0;
  
  const parent = new Map<bigint, [bigint, string]>();
​
  const startRem = 1n % n;
  queue.push(startRem);
  parent.set(startRem, [-1n, "1"]);
​
  let finalRem = -1n;
​
  while (head < queue.length) {
    const rem = queue[head++];
​
    if (rem === 0n) {
      finalRem = rem;
      break;
    }
​
    const rem0 = (rem * 10n) % n;
    if (!parent.has(rem0)) {