export const cycle = (n: number): number => {
  if (n % 2 === 0 || n % 5 === 0) return -1
​
  let rem = 1 % n
  let len = 0
​
  do {
    rem = (rem * 10) % n
    len++
  } while (rem !== 1)
​
  return len
}