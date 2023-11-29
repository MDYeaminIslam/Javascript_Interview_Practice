const prompt = require("prompt-sync")();

function timeConversion(s) {
  // Write your code here
  //const [time, period] = s.split(/([APMapm]{2})/);; //split the string into an array of 2 elements
  const [hours,minutes,seconds] = s.split(":") //split the first element of the array into 3 elements and make them numbers
  const Seconds = [...seconds];
  const period = Seconds.splice(-2,2); //get the last 2 characters of the seconds element
  Seconds = String(Seconds);
  console.log(typeof(Seconds));
  let newHour = hours;
  if(String(period.toUpperCase()) === "PM" && newHour !== 12)  newHour+=12;
 else if(String(period.toUpperCase()) === "AM" && newHour === 12) newHour = 0;

  const HOURS = String(newHour).padStart(2,"0");
  const MINUTES = String(minutes).padStart(2,"0");
  const SECONDS = String(seconds).padStart(2,"0");
  console.log(`${HOURS}:${MINUTES}:${SECONDS}`)
}
const inputTimeString = "07:05:45PM";
timeConversion(inputTimeString);