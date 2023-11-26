const prompt = require("prompt-sync")();

for(var i=0; i<4; i++){
  setTimeout(() => console.log(i), 2);
}
//Reason of this output is hoisting 

for(let i=0; i<4; i++){
  setTimeout(() => console.log(i), 5);
}

