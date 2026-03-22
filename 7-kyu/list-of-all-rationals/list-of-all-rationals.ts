export function* allRationals(): IterableIterator<[number, number]> {
  const queue: [number, number][] = [[1, 1]];
  let index = 0;
​
  while (true) {
    const [a, b] = queue[index++];
    yield [a, b];
​
    queue.push([a, a + b]); // left child
    queue.push([a + b, b]); // right child
  }
}