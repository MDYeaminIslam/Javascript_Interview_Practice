const prompt = require("prompt-sync")();
function lonelyinteger(a) {
  // Write your code here
  return a.reduce((acc,num,) => acc ^ num,0);

}
const a = [1, 2, 3, 4, 3, 2, 1];
const lonelyInteger = lonelyinteger(a);
console.log(lonelyInteger);
