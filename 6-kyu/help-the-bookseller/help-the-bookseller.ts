export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (!listOfArt.length || !listOfCat.length) return ''
​
  const totals: { [key: string]: number } = {}
​
  for (const cat of listOfCat) {
    totals[cat] = 0
  }
​
  for (const item of listOfArt) {
    const [code, qtyStr] = item.split(' ')
    const cat = code[0]
    if (totals.hasOwnProperty(cat)) {
      totals[cat] += parseInt(qtyStr)
    }
  }
​
  return listOfCat
    .map(cat => `(${cat} : ${totals[cat]})`)
    .join(' - ')
}