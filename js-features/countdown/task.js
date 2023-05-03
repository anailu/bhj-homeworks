//0
const timer = document.getElementById("timer");
let seconds = +timer.textContent;

const countdown = setInterval(function() {
    seconds--;
    timer.textContent = seconds;

    if (seconds === 0) {
        clearInterval(countdown);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

//1
/*const time_now1 = document.getElementById("timer");
let seconds1 = +time_now1.textContent;

const countdown1 = setInterval(function() {
    seconds1--;

    let hours = Math.floor(seconds1 / 3600);
    let minutes = Math.floor((seconds1 % 3600) / 60);
    let remainingSeconds = seconds1 % 60;

    let timeString = '';

    if (hours < 10) {
        timeString += '0' + hours;
    } else {
        timeString += hours;
    }

    timeString += ':';

    if (minutes < 10) {
        timeString += '0' + minutes;
    } else {
        timeString += minutes;
    }

    timeString += ':';

    if (remainingSeconds < 10) {
        timeString += '0' + remainingSeconds;
    } else {
        timeString += remainingSeconds;
    }

    timer.textContent = timeString;

    if (seconds1 === 0) {
        clearInterval(countdown1);
        alert("Вы победили в конкурсе!");
    }
  }, 1000);*/

//2
/*const timer2 = document.getElementById("timer");
let seconds2 = +timer2.textContent;

const countdown2 = setInterval(function() {
    seconds2--;
    timer2.textContent = seconds2;

    if (seconds2 === 0) {
        clearInterval(countdown2);
        alert("Вы победили в конкурсе!");
        location = "https://s01.free-psd-templates.com/2022/11/9bf31c7ff062936a96d3c8bd1f8f2ff3/free-psd-templates-com-724562-free-glass-water-bottle-mockup.zip";
    }
}, 1000);*/