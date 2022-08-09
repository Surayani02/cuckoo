'use strict';

import './style.css';

const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const timeContainer = document.querySelector('.time');
const dateContainer = document.querySelector('.date');
const toggleTheme = document.querySelector('.toggle');

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

toggleTheme.addEventListener('click', function(event) {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark') ? event.target.innerHTML = 'Light Mode' : event.target.innerHTML = 'Dark Mode';
});

const scale = function(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const setTime = function() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const actualHours = time.getHours();
    const hours = actualHours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let detectAmPm = actualHours >= 12 ? `PM` : `AM`;

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeContainer.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${detectAmPm}`;
    dateContainer.innerHTML = `${weekDays[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);