const prompt = require('prompt-sync')();

function timeConversion(s) {
  let [hours,minutes,secondPeriod] = s.split(":");
  let seconds = secondPeriod.slice(0,2);
  let period = secondPeriod.slice(2);

  let newHour = Number(hours, 10); // convert to base 10

  if (period.toUpperCase() === 'PM' && newHour !== 12) {
    newHour += 12;
  } else if (period.toUpperCase() === 'AM' && newHour === 12) {
    newHour = 0;
  }

  const formattedHour = String(newHour).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  console.log(`${formattedHour}:${formattedMinutes}:${formattedSeconds}`);
}

const inputTimeString = '12:05:45AM';
timeConversion(inputTimeString);
