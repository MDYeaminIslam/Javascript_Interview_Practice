const prompt = require("prompt-sync")();

console.log(+true) //here + sign is a unary operator and it convert true to 1 like converting to number
console.log(+false) //here + sign is a unary operator and it convert false to 0 like converting to number
console.log(+null) //showing 0 because null is a falsy value
console.log(!"JS") //here ! sign is a unary operator and it convert string to boolean and then reverse the boolean value.Like converting true to false and false to true