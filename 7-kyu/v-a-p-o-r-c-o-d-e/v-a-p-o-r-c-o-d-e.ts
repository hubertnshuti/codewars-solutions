export function vaporcode(str: string ): string {
  return str
    .toUpperCase()
    .split('')
    .filter(c => c !== ' ')
    .join('  ');
}