const prompt = require("prompt-sync")();

let a = {greeting: "Assalamu alaikum"};

let z = a;

z.greeting = "Hi";
console.log(a.greeting) //this will show Hi because z and a both are pointing to the same object and object are refarance type data type so if we change the value of z then a will also change
//but if we use spread operator then it will not change the value of a like this let z = {...a}