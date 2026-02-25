export class Kata {
  static dnaStrand(dna: string): string {
    const map: Record<string, string> = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
​
    return dna
      .split("")
      .map(char => map[char])
      .join("");
  }
}