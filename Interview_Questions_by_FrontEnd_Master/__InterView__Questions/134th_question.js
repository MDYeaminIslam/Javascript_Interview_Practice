const prompt = require("prompt-sync")();

const val1 = 1000000000;
const val2 = 10_00_00_000_0; //this is ES6 vesion and this helps to read the number easily and separate a big number.
console.log(val1 === val2); //true because both are same number