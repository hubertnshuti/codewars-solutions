export function crossover(chromosome1: string, chromosome2: string, index: number): string[] {
  const part1A = chromosome1.slice(0, index);
  const part1B = chromosome1.slice(index);
​
  const part2A = chromosome2.slice(0, index);
  const part2B = chromosome2.slice(index);
​
  return [
    part1A + part2B,
    part2A + part1B
  ];
}