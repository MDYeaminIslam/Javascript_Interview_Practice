const prompt = require('prompt-sync')();

function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) leftDiagonal += arr[i][j];
      if (i + j == arr.length - 1) rightDiagonal += arr[i][j];
    }
  }
  return Math.abs(leftDiagonal-rightDiagonal);
}
const arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
const difference = diagonalDifference(arr);
console.log(difference); // Output: 2
