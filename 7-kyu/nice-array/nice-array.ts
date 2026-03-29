export function isNice(arr: number[]): boolean {
  if (arr.length === 0) return false;
  const set = new Set(arr);
  return arr.every(n => set.has(n - 1) || set.has(n + 1));
}