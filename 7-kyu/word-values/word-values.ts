export function wordValue(arr: string[]): number[] {
  return arr.map((word, index) => {
    // remove spaces
    const cleanWord = word.replace(/ /g, '');
​
    // calculate letter values
    const sum = [...cleanWord].reduce((total, char) => {
      return total + (char.charCodeAt(0) - 96);
    }, 0);
​
    // multiply by position (index + 1)
    return sum * (index + 1);
  });
}