export function incrementer(nums: number[]) : number[] {
  return nums.map((n, i) => (n + i + 1) % 10);
}