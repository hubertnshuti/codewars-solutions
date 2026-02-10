export function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) return false;
​
  let northSouth = 0;
  let eastWest = 0;
​
  for (const dir of walk) {
    if (dir === 'n') northSouth++;
    if (dir === 's') northSouth--;
    if (dir === 'e') eastWest++;
    if (dir === 'w') eastWest--;
  }
​
  return northSouth === 0 && eastWest === 0;
}
​