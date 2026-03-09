export function partlist(arr: string[]): string[][] {
  return arr.slice(1).map((_, i) => [
    arr.slice(0, i + 1).join(" "),
    arr.slice(i + 1).join(" ")
  ]);
}