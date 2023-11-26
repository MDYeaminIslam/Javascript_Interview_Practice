const prompt = require("prompt-sync")();

let val = "10";
let value = "10";

val = val+1; //this will concatenate the string and number that why are getting 101
value++; //but here ""++"" operator will convert the string into number and then increment the value that's why we are getting 11
console.log(val); //101
console.log(value); //11