export function isSortedAndHow(array: number[]): string {
  const asc = array.every((v, i) => i === 0 || array[i - 1] <= v);
  if (asc) return "yes, ascending";
  const desc = array.every((v, i) => i === 0 || array[i - 1] >= v);
  if (desc) return "yes, descending";
  return "no";
}