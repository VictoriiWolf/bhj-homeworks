let timer = document.getElementById('timer')
let status = document.getElementById('status')

timer = 59;
let seconds = 1 * 3600;
let secondsInDay = 24 * 3600;

let countdown = setInterval(function() {

    timer--;

    if (timer == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countdown)
    }
    status.textContent = 'До окончания конкурса осталось секунд: ' + timer;
}, 1000);