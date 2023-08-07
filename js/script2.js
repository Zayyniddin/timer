const stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
    stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
    stopwatch__btn = document.querySelector('.stopwatch__btn'),
    tabsLink__span = document.querySelector('.tabsLink__span');

let seconds = 0,
    minutes = 0,
    hours = 0,
    isRunning = false,
    timer = null;

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
    timer = setTimeout(stopWatch, 100);
}

stopwatch__btn.addEventListener("click", function() {
    tabsLink__span.classList.add('active');
    
    if (stopwatch__btn.textContent === 'start') {
        isRunning = true
        stopWatch()
        stopwatch__btn.textContent = 'stop'
        stopwatch__btn.style.color = 'white'
        stopwatch__btn.style.backgroundColor = 'red'    
    } else if (stopwatch__btn.textContent === 'stop') { 
        isRunning = false
        tabsLink__span.classList.remove('active');
        tabsLink__span.classList.add('active_clear');
        stopwatch__btn.textContent = 'clear'
        clearInterval(timer)
    } else {
        tabsLink__span.classList.contains('active_clear');
        tabsLink__span.classList.remove('active_clear');
        tabsLink__span.classList.remove('active');
        seconds = 0;
        minutes = 0;
        hours = 0;
        stopwatchHours.textContent = "0";
        stopwatchMinutes.textContent = "0";
        stopwatchSeconds.textContent = "0";
        stopwatch__btn.textContent = 'start';
        stopwatch__btn.style.backgroundColor = '';
        stopwatch__btn.style.color = '';
    }
});


