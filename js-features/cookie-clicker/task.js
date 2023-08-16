const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

let clicks = 0;

// cookie.addEventListener('click', function() {
//     cookie.onclick = () => clickerCounter.textContent = clicks++;
// });

cookie.onclick = function() {
    cookie.classList.toggle('bigger__cookie');
};