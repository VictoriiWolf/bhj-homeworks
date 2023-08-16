const items = Array.from(document.querySelectorAll('.dropdown__item'))
const links = Array.from(document.querySelectorAll('.dropdown__link'));
const value = document.querySelector('dropdown__value');
const dropdown = document.querySelector('dropdown');

items.forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        dropdown.forEach(e => {
            if (!menu.classlist.contains('dropdown__value:after')) {
                menu.classlist.add('dropdown__list_active')
            }
        })
    })
})
