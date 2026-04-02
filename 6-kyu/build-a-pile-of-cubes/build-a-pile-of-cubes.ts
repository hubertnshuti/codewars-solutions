export function findNb(m: number): number {
  let sum = 0
  let n = 0
​
  while (sum < m) {
    n++
    sum += n * n * n
  }
​
  return sum === m ? n : -1
}