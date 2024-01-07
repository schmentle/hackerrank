function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);

    return candles.filter(candle => candle === maxHeight).length;
}