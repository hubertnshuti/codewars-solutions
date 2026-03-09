export function validateBase(num: string, base: number): boolean {
  const allowed = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base)
  return [...num].every(char => allowed.includes(char))
}