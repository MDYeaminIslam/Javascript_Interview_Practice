const prompt = require("prompt-sync")();

function miniMaxSum(arr) {
  // Write your code here
  let sortedArray = arr.sort();
  //console.log(sortedArray);
  let minSum = 0;
  let maxSum = 0;
  for(let i = 0; i<(sortedArray.length)-1; i++){
    minSum += sortedArray[i];
  
  }
  for(let i = 1; i<sortedArray.length; i++){
    maxSum += sortedArray[i];
  
  }

  console.log(`${minSum} ${maxSum}`);

}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);