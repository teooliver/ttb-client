// ==== Before making the same function in Rust ====>
// function calculateTimer(timeInSeconds: number): Array<number | string> {
//   let hours: number = Math.floor(timeInSeconds / 3600);
//   let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
//   let seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

//   let hoursFormat = hours < 10 ? `0${hours}` : hours;
//   let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
//   let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

//   return [hoursFormat, minutesFormat, secondsFormat];
// }

// export { calculateTimer };

// ==== After making the same function in Rust ====>
function calculateTimer(timeInSeconds: number): Array<string> {
  let hours: number = Math.floor(timeInSeconds / 3600);
  let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

  let hoursFormat = hours < 10 ? `0${hours}` : hours.toString();
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes.toString();
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds.toString();

  return [hoursFormat, minutesFormat, secondsFormat];
}

export { calculateTimer };
