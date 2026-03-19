export function stalinSort(array: number[]): void {
  if (array.length === 0) return;
​
  let last = array[0];
​
  for (let i = 1; i < array.length; ) {
    if (array[i] >= last) {
      last = array[i];
      i++;
    } else {
      console.log("Расстрелять!");
      array.splice(i, 1);
    }
  }
}