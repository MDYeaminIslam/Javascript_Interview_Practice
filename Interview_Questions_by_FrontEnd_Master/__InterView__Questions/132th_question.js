const prompt = require("prompt-sync")();

const arr = [{id:10,marks:69},{id:12,marks:90},{id:13,marks:29},{id:15,marks:45}];

//check if any student has failed
const passMark = 33;

const isFailed = arr.every((value) => value.marks >= passMark);//The every() method checks if all elements in the array satisfy a given condition.It returns true only if all elements pass the condition; otherwise, it returns false.
console.log(isFailed);