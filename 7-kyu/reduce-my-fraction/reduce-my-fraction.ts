export const reduce = (arr: number[]): number[] => {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(arr[0], arr[1]);
  return [arr[0] / g, arr[1] / g];
};