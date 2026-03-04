export function spinningRings(innerMax: number, outerMax: number): number {
  let numberOfSpinsTillRingsAreEqual = 0;
  let inner = 0;
  let outer = 0;
​
  do {
    numberOfSpinsTillRingsAreEqual++;
    inner = inner === 0 ? innerMax : inner - 1;
    outer = outer === outerMax ? 0 : outer + 1;
  } while (inner !== outer);
​
  return numberOfSpinsTillRingsAreEqual;
}