const prompt = require("prompt-sync")();

const arr = [1,2,3,4,5];
console.log(0 in arr); //true because 1 is present in the array
console.log(2 in arr); //true because 2 is present in the array
console.log(5 in arr); //false because 5 is present in the array
console.log(6 in arr); //false because 6 is not present in the array

/*array in js also do as work or object. And in the array index play the role of keys.Above code values are 1,2,3,4,5 and indexes will be 0,1,2,3,4. "in" operator check the keys and 0 to 4 index present that's why 0,2 showing tru but 5,6 are not present as a key that is the reason behind showing false.*/

//New topic to learns.
//138th question
//***console.trace()**** method is used to trace the current position of the code in the stack trace. sometimes we do work with multiple functions and in that functions some other functions are also called. So, it is difficult to trace the current position of the code. So, console.trace() method is used to trace the current position of the code in the stack trace.