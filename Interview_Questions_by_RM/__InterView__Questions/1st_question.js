const prompt = require("prompt-sync")();
function showData(){
  //var name is hoisted here that's it value is undefined and age is not hoisted here that's it show error
  //If both value declare top of the function then it will work perfectly
  console.log('Variable name is: ', name)
  console.log('Variable age is: ', age)
  var name = "Yeamin";
  let age = 25;
}

showData()

//This code will show error because of hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//In var variable hoisting is possible but in let variable hoisting is not possible.
//var declare korle variable ta upore niye jay but let declare korle upore niye jay na.