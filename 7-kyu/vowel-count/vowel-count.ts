export class Kata {
  static getCount(str: string): number {
    return str.split('').filter(c => 'aeiou'.includes(c)).length;
  }
}
​