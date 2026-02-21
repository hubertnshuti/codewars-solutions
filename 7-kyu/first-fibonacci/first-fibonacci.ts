export function solution(first: number, second: number): [number, number] {
​
  while (second >= first) {
    const previous = second - first;
​
    if (previous > first) break;
​
    second = first;
    first = previous;
  }
​
  return [first, second];
}