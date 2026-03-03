interface EvenOrOdd {
  (n: number): 'Even' | 'Odd';
  [key: number]: 'Even' | 'Odd';
}
​
export const evenOrOdd = new Proxy(
  // 1. We cast the target function "as EvenOrOdd" to force TypeScript to accept it
  ((n: number) => (n % 2 === 0 ? 'Even' : 'Odd')) as EvenOrOdd,
  {
    get: (target, prop) => {
      // 2. Safety check: If Mocha is looking for a Symbol or standard property, let it pass normally
      if (typeof prop === 'symbol' || isNaN(Number(prop))) {
        return Reflect.get(target, prop);
      }
      
      // 3. Otherwise, we know it's a number in brackets! Run the function.
      return target(Number(prop));
    }
  }
);