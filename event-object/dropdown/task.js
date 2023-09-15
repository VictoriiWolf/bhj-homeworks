const dropdown = document.querySelector('.dropdown');
const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('a'));

value.addEventListener('click', () => list.classList.toggle('dropdown__list_active'));

value.addEventListener('click', function() {
    for(let item of items) {
        item.onclick = function(event) {
            value.textContent = item.textContent;
            list.classList.remove('dropdown__list_active')
            event.preventDefault();
        }
    }
})