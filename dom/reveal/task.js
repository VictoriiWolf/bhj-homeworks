const body = document.querySelector('body')
const reveal = document.querySelector('.reveal')

function isVisible(reveal) {
    const { top, bottom } = reveal.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
        return true;
    }
}

let visibility = isVisible(reveal);

body.addEventListener('scroll', () => {
        setInterval(() => {        
            if(visibility = true) {
                reveal.classList.add('reveal_active');
            }
        }, 100)
    });