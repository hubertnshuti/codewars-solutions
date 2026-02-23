export function nextHigher(n: number): number {
  const s = '0' + n.toString(2);
  let i = s.length - 1;
  let onesCount = 0;
​
  while (i >= 0 && s[i] === '0') i--;
  
  while (i >= 0 && s[i] === '1') {
    onesCount++;
    i--;
  }
​
  const left = s.substring(0, i) + '1';
  const rightZeros = '0'.repeat(s.length - i - onesCount);
  const rightOnes = '1'.repeat(onesCount - 1);
​
  return parseInt(left + rightZeros + rightOnes, 2);
}