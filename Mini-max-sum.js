function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];

  // Loop through arr to find max and min values
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // copy arr
  const minArr = [...arr];
  const maxArr = [...arr];

  // Remove max value from minArr and remove min value from maxArr
  minArr.splice(minArr.indexOf(max), 1);
  maxArr.splice(minArr.indexOf(min), 1);

  // Sum both arrays
  const minSum = minArr.reduce((prev, cur) => prev + cur);
  const maxSum = maxArr.reduce((prev, cur) => prev + cur);

  console.log(`${minSum} ${maxSum}`);
}
