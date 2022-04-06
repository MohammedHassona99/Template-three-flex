// The End Of The Year Date To CountDown To
// 1000 millisecond = 1 second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
  //get Date Now
  let dateNow = new Date().getTime();

  //Find the Date Difference Between Now and Countdown Date
  let dateDiff = countDownDate - dateNow;
  //  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24); // 1000 millisecond => seconds / 60 mints fot mints / 60 = 1 hour for hours / 24 Hours for a day
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
