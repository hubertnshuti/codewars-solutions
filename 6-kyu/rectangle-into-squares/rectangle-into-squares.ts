export function sqInRect(lng: number, wdth: number): number[] | null {
  // Base case, if it's already a square return null
  if (lng === wdth) return null;
  
  const squares: number[] = [];
  
  // Loop until the remaining shape is a square
  while (lng > 0 && wdth > 0) {
    if (lng > wdth) {
      squares.push(wdth);
      lng -= wdth;
    } else if (wdth > lng) {
      squares.push(lng);
      wdth -= lng;
    } else {
      // When lng == wdth, we hit final square
      squares.push(lng);
      break;
    }
  }
  
  return squares;
}