const prompt = require("prompt-sync")();

let val1 = [1,2,3,4,5];
let val2 = [6,7,8,9,10];

//merger the array using concat() method
let merged = val1.concat(val2); //concat() method return the new array
console.log(merged);

//merger the array using spread operator
let merged1 = [...val1,...val2]; //spread operator return the new array and spread operator is ES6 feature
console.log(merged1);