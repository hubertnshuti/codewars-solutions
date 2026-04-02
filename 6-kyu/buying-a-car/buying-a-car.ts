export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  if (startPriceOld >= startPriceNew) return [0, Math.round(startPriceOld - startPriceNew)]
​
  let month = 0
  let oldPrice = startPriceOld
  let newPrice = startPriceNew
  let save = 0
  let loss = percentLossByMonth
​
  while (oldPrice + save < newPrice) {
    month++
​
    if (month % 2 === 0) loss += 0.5
​
    oldPrice -= oldPrice * loss / 100
    newPrice -= newPrice * loss / 100
    save += savingperMonth
  }
​
  return [month, Math.round(oldPrice + save - newPrice)]
}