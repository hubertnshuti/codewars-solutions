export function sumFracts(l: number[][]): string | null {
  if (l.length === 0) return null;
​
  const commonD = l.reduce((total, current) => total * current[1], 1);
​
  const totalN = l.reduce((total, current) => {
    const [n, d] = current;
    return total + (n * (commonD / d));
  }, 0);
​
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(totalN, commonD);
​
  const finalN = totalN / divisor;
  const finalD = commonD / divisor;
​
  return finalD === 1 ? `${finalN}` : `[${finalN}, ${finalD}]`;
}