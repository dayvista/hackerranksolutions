function miniMaxSum(arr) {
  let min = Math.min.apply(Math, arr),
      max = Math.max.apply(Math, arr),
      sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] === min) {
      min = arr[i];
    } else if (arr[i] === max) {
      max = arr[i];
    }
  }

  console.log((sum - max), (sum - min));
}

console.log(miniMaxSum([1,2,3,4,5]));