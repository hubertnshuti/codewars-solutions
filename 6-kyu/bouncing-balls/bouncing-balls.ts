export function bouncingBall(h: number, bounce: number, window: number): number {
  // validation
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
​
  let count = 1; // first fall
  let height = h * bounce;
​
  while (height > window) {
    count += 2; // seen going up and down
    height *= bounce;
  }
​
  return count;
}