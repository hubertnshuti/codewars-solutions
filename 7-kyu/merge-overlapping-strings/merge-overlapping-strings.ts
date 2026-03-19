export const mergeStrings = (first: string, second: string): string => {
  let maxOverlap = 0;
​
  for (let i = 1; i <= Math.min(first.length, second.length); i++) {
    if (first.slice(-i) === second.slice(0, i)) {
      maxOverlap = i;
    }
  }
​
  return first + second.slice(maxOverlap);
};