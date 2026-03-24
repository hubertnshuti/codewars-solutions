export function productArray(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);
​
  // left products
  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left *= nums[i];
  }
​
  // right products
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
​
  return result;
}