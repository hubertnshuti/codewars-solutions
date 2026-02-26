function candles(candlesNumber, makeNew) {
    let totalBurned = candlesNumber;
    let leftovers = candlesNumber;
​
    while (leftovers >= makeNew) {
        let newCandles = Math.floor(leftovers / makeNew);
        totalBurned += newCandles;
        leftovers = leftovers % makeNew + newCandles;
    }
​
    return totalBurned;
}