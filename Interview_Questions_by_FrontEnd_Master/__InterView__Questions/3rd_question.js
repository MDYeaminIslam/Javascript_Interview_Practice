const prompt = require("prompt-sync")();

const income = {
  skill: 10,
  monthly(){
    return this.skill * 10
  },
  yearly: () => 100 * this.skill
}

console.log(income.monthly()) //this will return 100 because monthly is between the income object and there this keyword representing the income object
console.log(income.yearly()) //this will return NaN because arrow function's this keyword representing the global object and there is no skill property in global object