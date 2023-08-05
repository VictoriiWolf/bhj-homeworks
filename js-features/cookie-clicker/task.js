const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let clicks = 0;

cookie.onclick = function() {
    cookie.onclick = () => clickerCounter.textContent = clicks++;
    cookie.width = 220;
}
