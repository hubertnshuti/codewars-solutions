export function solution(nums: number[] | null): number[] {
  if (!nums || nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
}