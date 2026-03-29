export function polydivisible(x: number): boolean {
  const s = String(x);
  let current = 0;
​
  for (let i = 0; i < s.length; i++) {
    current = current * 10 + Number(s[i]);
    if (current % (i + 1) !== 0) return false;
  }
​
  return true;
}