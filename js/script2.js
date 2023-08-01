const stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
    stopwatch__btn = document.querySelector('.stopwatch__btn');

let seconds = 0,
    minutes = 0,
    hours = 0,
    isRunning = false,
    timer = 0;

function stopWatch() {
    seconds++;
    if(seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if(minutes === 60) {
        hours ++;
        minutes = 0;
    }

    stopwatchHours.textContent = hours;
    stopwatchMinutes.textContent = minutes;
    stopwatchSeconds.textContent = seconds;
    timer = setTimeout(stopWatch, 10);
}

stopwatch__btn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        stopwatch__btn.style.backgroundColor = '';
        stopwatch__btn.style.color = '';
        stopwatch__btn.textContent = 'start';
    } else {
        stopWatch();
        isRunning = true;
        stopwatch__btn.style.backgroundColor = 'red';
        stopwatch__btn.style.color = 'white';
        stopwatch__btn.textContent = 'stop';
    }
});

