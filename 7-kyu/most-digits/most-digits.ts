export class Kata {
  static findLongest(array: number[]): number {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (Math.abs(array[i]).toString().length > Math.abs(longest).toString().length) {
        longest = array[i];
      }
    }
    return longest;
  }
}