const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.querySelector('img')

let clicks = 0;

cookie.onclick = function() {
    cookie.onclick = () => clickerCounter.textContent = clicks++
};
cookie.addEventListener('click', function() {
    if(cookie.classList.contains('bigger__cookie')) {
        cookie.classList.remove('bigger__cookie');
    } else {
        cookie.classList.add('bigger__cookie');
    }
});