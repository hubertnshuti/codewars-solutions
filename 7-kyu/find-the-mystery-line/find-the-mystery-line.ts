type MysteryFunction = (x: number) => number;
​
export const findMysteryEquation = (func: MysteryFunction): [number, number] => {
  const b = func(0);
  const m = func(1) - func(0);
​
  return [m, b];
};