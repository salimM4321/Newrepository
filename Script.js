
// Get the target date and time
const targetDate = new Date('2024-02-01T00:00:00');

// Create variables
const daysElement = document.querySelector('.Time1 .day');
const hoursElement = document.querySelectorAll('.Time1 .day')[1];
const minutesElement = document.querySelectorAll('.Time1 .day')[2];
const secondsElement = document.querySelectorAll('.Time1 .day')[3];

// Update the countdown display
function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML elements
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}

// Format time to have leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Set up a timer to update the countdown every second
setInterval(updateCountdown, 1000);


 

