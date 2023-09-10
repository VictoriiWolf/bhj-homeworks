const body = document.querySelector('body')
const reveal = document.querySelector('.reveal')

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom > 0 || top < window.innerHeight) {
        return true;
    }
}

let visibility = isVisible(reveal);

setInterval(() => {
    body.addEventListener('scroll', {
    if(visibility = true) {
        reveal.classList.add('reveal_active')
        console.log(isVisible(reveal));
    }
})
}, 100)