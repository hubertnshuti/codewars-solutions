export function orderedCount(text: string): [string, number][] {
  const count: { [key: string]: number } = {};
  const order: string[] = [];
​
  for (let char of text) {
    if (count[char] === undefined) {
      count[char] = 1;
      order.push(char); 
    } else {
      count[char]++;
    }
  }
​
  return order.map(char => [char, count[char]]);
}