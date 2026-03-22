export function encode(s: string): string {
  let left = 0;
  let right = s.length - 1;
  let result = "";
​
  while (left <= right) {
    if (left === right) {
      result += s[left];
    } else {
      result += s[left] + s[right];
    }
    left++;
    right--;
  }
​
  return result;
}
​
export function decode(s: string): string {
  const result: string[] = new Array(s.length);
​
  let left = 0;
  let right = s.length - 1;
​
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result[left] = s[i];
      left++;
    } else {
      result[right] = s[i];
      right--;
    }
  }
​
  return result.join("");
}