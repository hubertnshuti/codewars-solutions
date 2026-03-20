function score(n) {
  let res = 1;
  while (res <= n) {
    res <<= 1; 
  }
  return res - 1;
}
​