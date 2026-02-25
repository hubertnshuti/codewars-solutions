export function interlockable(a: bigint, b: bigint): boolean {
  return (a & b) === 0n;
}