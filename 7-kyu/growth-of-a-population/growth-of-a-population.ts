export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  let years = 0;
  let population = p0;
​
  const rate = percent / 100;
​
  while (population < p) {
    population = Math.floor(population + population * rate + aug);
    years++;
  }
​
  return years;
};