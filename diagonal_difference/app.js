

function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let n = arr.length;

  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][j];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference(
  [[11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]]
));