const prompt = require("prompt-sync")();

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;

  /*
  we can use this also
  arr.forEach(() => {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  })*/

  for (const number of arr) {
    if (number < 0) {
      negative++;
    } else if (number > 0) {
      positive++;
    } else {
      zero++;
    }
  }

  const length = arr.length;
  
  console.log((positive / length).toFixed(6));
  console.log((negative / length).toFixed(6));
  console.log((zero / length).toFixed(6));

}

const arr = [1, 1, 0, -1, -1];
plusMinus(arr);