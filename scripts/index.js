const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const date = new Date(2021, 7, 13)
const timer = () => {
    const dif = Math.round((date - Date.now()) / 1000);
    const days = Math.floor(dif / 60 / 60 / 24);
    const hours = Math.floor(dif / 60 / 60 - days * 24);
    const minutes = Math.floor(dif / 60 - days * 24 * 60 - hours * 60);
    const seconds = dif - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}
let timerId = setInterval(timer, 1000);