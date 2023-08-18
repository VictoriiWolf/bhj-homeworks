const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clicks = 0;

cookie.addEventListener('click', function() {
    cookie.onclick = () => clickerCounter.textContent = clicks++;
    if(cookie.width == 200) {
        cookie.width = 230;
    } else {
        cookie.width = 200
    }
});