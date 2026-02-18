export const shuffint = (n: number): number => {
  const bin = n.toString(2);
​
  if (!bin.includes('0')) {
    return 0;
  }
​
  const bits = bin.split('');
  const len = bits.length;
  let shuffledCandidate = n;
​
  while (shuffledCandidate === n) {
    for (let i = len - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bits[i], bits[j]] = [bits[j], bits[i]];
    }
    
    shuffledCandidate = parseInt(bits.join(''), 2);
  }
​
  return shuffledCandidate;
}