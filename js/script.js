const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s");

function clock() {
  let time = new Date(),
    second = time.getUTCSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  sec.style = `transform:rotate(${second}deg)`;
  min.style = `transform:rotate(${minutes}deg)`;
  hour.style = `transform:rotate(${hours}deg)`;

  setTimeout(() => clock(), 1000);
}
clock();

function clockBottom() {
  const hoursBlock = document.querySelector(".hours"),
    minutesBlock = document.querySelector(".minutes");

  let time = new Date(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  hoursBlock.textContent = hours < 10 ? "0" + hours : hours;
  minutesBlock.textContent = minutes < 10 ? "0" + minutes : minutes;

  setTimeout(() => clockBottom(), 60000);
}

clockBottom();

let stopwatchTab = document.querySelector(".stopwatch");
let clockTime = document.querySelector(".clock");
document.addEventListener("DOMContentLoaded", function () {
  const clock = document.querySelector(".tabsItem:first-child"),
    stopWatch = document.querySelector(".tabsItem:last-child");

  stopWatch.addEventListener("click", function () {
    clock.classList.remove("active");
    stopWatch.classList.add("active");
    stopwatchTab.classList.add("active");
    clockTime.classList.remove("active");
  });

  clock.addEventListener("click", function () {
    stopWatch.classList.remove("active");
    clock.classList.add("active");
    clockTime.classList.add("active");
    stopwatchTab.classList.remove("active");
  });
});
