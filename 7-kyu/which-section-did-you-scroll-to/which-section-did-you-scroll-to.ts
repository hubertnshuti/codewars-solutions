export function getSectionId(scroll: number, sizes: number[]) {
  let sum = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (scroll < sum + sizes[i]) return i;
    sum += sizes[i];
  }
  return -1;
}