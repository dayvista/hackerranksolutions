function birthdayCakeCandles(ar) {
  const tallestCandle = Math.max(...ar);

  return ar.filter(candle => {
    return candle === tallestCandle;
  }).length;
}

console.log(birthdayCakeCandles([3,2,1,3]));