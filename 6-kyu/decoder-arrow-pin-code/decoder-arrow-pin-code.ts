export function decArrowPinCode(sticker: string): number[] {
  const keypad: Record<string, [number, number]> = {
    "7": [0, 0], "8": [0, 1], "9": [0, 2],
    "4": [1, 0], "5": [1, 1], "6": [1, 2],
    "1": [2, 0], "2": [2, 1], "3": [2, 2],
    "0": [3, 0]
  };
​
  const reverseKeypad: Record<string, string> = {};
  for (const key in keypad) {
    const [r, c] = keypad[key];
    reverseKeypad[`${r},${c}`] = key;
  }
​
  const moves: Record<string, [number, number]> = {
    "↑": [-1, 0],
    "↓": [1, 0],
    "←": [0, -1],
    "→": [0, 1]
  };
​
  const result: number[] = [];
​
  let current = sticker[0];
  if (!keypad[current]) return [];
​
  let [row, col] = keypad[current];
  result.push(Number(current));
​
  for (let i = 1; i < sticker.length; i++) {
    const char = sticker[i];
​
    // Handle repeat
    if (char === "*") {
      const repeat = Number(sticker[i + 1]);
      if (!repeat || repeat < 1) return [];
      for (let r = 0; r < repeat; r++) {
        result.push(Number(current));
      }
      i++; // skip digit after *
      continue;