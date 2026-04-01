export function posAverage(s: string): number {
  let arr = s.split(", ")
  let same = 0
  let pairs = 0
  let len = arr[0].length
​
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs++
      for (let k = 0; k < len; k++) {
        if (arr[i][k] === arr[j][k]) same++
      }
    }
  }
​
  return same * 100 / (pairs * len)
}