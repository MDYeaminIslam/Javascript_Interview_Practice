const prompt = require("prompt-sync")();

let a = 10;
let b = new Number(10);
let c = 10;

console.log(a == b); //true because == operator check the value of the variable and here a and b both are 10
console.log(a === b); //false because === operator check the value and type of the variable and here a is number type and b is object type
console.log(b === c); //false because === operator check the value and type of the variable and here b is object type and c is number type