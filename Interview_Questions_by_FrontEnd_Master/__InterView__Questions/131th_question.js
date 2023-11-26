const prompt = require("prompt-sync")();

const arr = [{id:10,marks:69},{id:12,marks:90},{id:13,marks:29},{id:15,marks:45}];

//check if any student has failed
const passMark = 33;

const isFailed = arr.some((value) => value.marks < passMark); //The some() method checks if at least one element in the array satisfies a given condition.It returns true if at least one element passes the condition, and false otherwise.
console.log(isFailed);