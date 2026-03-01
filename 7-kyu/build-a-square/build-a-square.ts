export function generateShape(int: number): string {
  return Array.from({ length: int }, () => "+".repeat(int)).join("\n");
}