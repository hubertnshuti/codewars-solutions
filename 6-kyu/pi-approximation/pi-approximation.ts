export function iterPi(epsilon: number): [number, number] {
  const pi = Math.PI
​
  let iterations = 0
  let sum = 0
  let sign = 1
  let denom = 1
​
  while (true) {
    sum += sign / denom
    iterations += 1
​
    const approxPi = 4 * sum
    if (Math.abs(approxPi - pi) < epsilon) {
      const rounded = Math.round(approxPi * 1e10) / 1e10
      return [iterations, rounded]
    }
​
    sign = -sign
    denom += 2
  }
}
​