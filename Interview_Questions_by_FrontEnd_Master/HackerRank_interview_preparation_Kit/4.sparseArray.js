const prompt = require("prompt-sync")();

function matchingStrings(strings, queries) {
  // Write your code here
  let result = [];
  
  for(let i=0; i<queries.length; i++)
  {
    let count = 0;
    for(let j = 0; j<strings.length; j++)
    {
      if(queries[i]===strings[j]) count++;
    }
    result.push(count);
  }
  return result;

}

const strings = ["abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf"];
const queries = ["abcde","sdaklfj","asdjf","na","basdn"];
console.log(matchingStrings(strings, queries));