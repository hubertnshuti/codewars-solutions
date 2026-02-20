export function inArray(a1: string[], a2: string[]): string[] {
  const result = a1.filter(sub =>
    a2.some(str => str.includes(sub))
  );
​
  // remove duplicates and sort
  return [...new Set(result)].sort();
}