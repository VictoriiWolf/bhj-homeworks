let timer = document.getElementById("timer")
let status = document.getElementById("status")

timer = 59;

function countdown() {
    timer--;
    if(timer === 0) {
        alert("Вы победили в конкурсе!")
    }
    status.textContent = "До окончания конкурса осталось секунд: " + timer;
}

setInterval(countdown, 1000);