const median = (arr: number[]): number => {
  const n = arr.length;
  const m = Math.floor(n / 2);
  return n % 2 ? arr[m] : (arr[m - 1] + arr[m]) / 2;
};
​
const quartiles = (sorted: number[]): { lq: number; uq: number } => {
  const n = sorted.length;
  if (n === 0) return { lq: NaN, uq: NaN };
  if (n === 1) return { lq: sorted[0], uq: sorted[0] };
​
  if (n % 2) {
    const mid = Math.floor(n / 2);
    const lower = sorted.slice(0, mid);
    const upper = sorted.slice(mid + 1);
    return { lq: median(lower), uq: median(upper) };
  } else {
    const half = n / 2;
    const lower = sorted.slice(0, half);
    const upper = sorted.slice(half);
    return { lq: median(lower), uq: median(upper) };
  }
};
​
export const removeOutliers = (data: number[]): number[] => {
  let current = data.slice();
​
  while (true) {
    if (current.length < 2) return current;
​
    const sorted = current.slice().sort((a, b) => a - b);
    const { lq, uq } = quartiles(sorted);
​
    const iqr = uq - lq;
    const low = lq - 1.5 * iqr;
    const high = uq + 1.5 * iqr;
​
    const next = current.filter((x) => x >= low && x <= high);
    if (next.length === current.length) return next;
    current = next;
  }
};