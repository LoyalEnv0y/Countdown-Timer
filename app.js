const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

// The target day for the countdown to count to.
const targetDate = '12 Nov 2021 11:00';

/**
 * converts targetDate to a date and creates a new date with the device's current time. Calculates the difference in seconds.
 * sets counters to 00 and 0 and returns if the target date has been reached.
 * calculates the days, hours, minutes and seconds.
 * finally sets the formatted versions of the time units as innerHTML of the counters
 */
function countDown() {
    const targetDateMS = new Date(targetDate);
    const currentDate = new Date();

    const difference = (targetDateMS - currentDate) / 1000;
    if (difference <= 0) {
        daysEl.innerHTML = "0";
        hoursEl.innerHTML = "00";
        minEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
        return
    }


    const days = Math.floor(difference / 3600 / 24);
    const hours = Math.floor(difference / 3600) % 24;
    const minutes = Math.floor(difference / 60) % 60;
    const seconds = Math.floor(difference % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

/**
 * @param {NUMBER} time is the given time unit 
 * @returns a 0 cleaned version if the time is less then 10.
 */
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countDown, 1000)
