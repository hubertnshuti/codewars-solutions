export function menFromBoys(arr: number[]): number[] {
  const unique = [...new Set(arr)];
  const evens = unique.filter(num => num % 2 === 0).sort((a, b) => a - b);
  const odds = unique.filter(num => num % 2 !== 0).sort((a, b) => b - a);
  return [...evens, ...odds];
}