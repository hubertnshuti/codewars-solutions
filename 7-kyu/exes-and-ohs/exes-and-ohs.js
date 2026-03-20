function XO(str) {
  str = str.toLowerCase();
​
  let x = 0;
  let o = 0;
​
  for (let char of str) {
    if (char === 'x') x++;
    if (char === 'o') o++;
  }
​
  return x === o;
}