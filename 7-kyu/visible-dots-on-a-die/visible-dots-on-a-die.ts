export function totalAmountVisible(topNum: number, numOfSides: number): number {
  const totalSumOfAllFaces = (numOfSides * (numOfSides + 1)) / 2;
  const bottomFace = numOfSides + 1 - topNum;
  
  return totalSumOfAllFaces - bottomFace;
}