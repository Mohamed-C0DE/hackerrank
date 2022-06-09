function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    primary += arr[i][i];
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    secondary += arr[j][index];
    index++;
  }

  return Math.abs(primary - secondary);
}
