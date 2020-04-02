function plusMinus(arr) {
  let positive = 0;
  let zero = 0;
  let negative = 0;

  arr.forEach(n => {
    if (n > 0) {
      positive++;
    } else if (n < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));