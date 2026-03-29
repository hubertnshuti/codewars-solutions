export function heavyMetalUmlauts(boringText: string): string {
  return boringText.replace(/[AEIOUYaeiouy]/g, c => ({
    A: 'Ä',
    E: 'Ë',
    I: 'Ï',
    O: 'Ö',
    U: 'Ü',
    Y: 'Ÿ',
    a: 'ä',
    e: 'ë',
    i: 'ï',
    o: 'ö',
    u: 'ü',
    y: 'ÿ'
  }[c]!));
}