export function jumpingNumber(n: number): string {
  const digits = String(n);
  
  for (let i = 0; i < digits.length - 1; i++) {
    if (Math.abs(Number(digits[i]) - Number(digits[i + 1])) !== 1) {
      return "Not!!";
    }
  }
  
  return "Jumping!!";
}