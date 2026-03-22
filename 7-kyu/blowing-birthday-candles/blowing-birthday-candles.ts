export function blowCandles(str: string): number {
  const arr = str.split('').map(Number);
  let blows = 0;
​
  while (true) {
    // find first non-zero candle
    let i = arr.findIndex(v => v > 0);
    if (i === -1) break;
​
    // blow next 3 candles
    for (let j = i; j < i + 3 && j < arr.length; j++) {
      if (arr[j] > 0) arr[j]--;
    }
​
    blows++;
  }
​
  return blows;
}