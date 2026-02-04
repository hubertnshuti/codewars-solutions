export function enough(cap: number, on: number, wait: number): number {
  const available = cap - on;
  return available === wait || available > wait ? 0 : wait - available
}