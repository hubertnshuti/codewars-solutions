export function automorphic(n: number): string {
  const square = (n * n).toString();
  return square.endsWith(n.toString()) ? "Automorphic" : "Not!!";
}