const prompt = require("prompt-sync")();

let arr = [1,2,3,4,5];
//add 0 at the beginning

//using unshift
// arr.unshift(0);
// console.log(arr);

//using splice
//arr.splice(0,0,0); //first element is the index, second element is the number of elements to be removed, third element is the element to be added
//console.log(arr);

//using spread operator
arr = [0, ...arr];
console.log(arr);