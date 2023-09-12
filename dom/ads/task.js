const texts = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

setInterval(() => {
    const newText = texts[currentIndex];
    currentIndex++;
    if(currentIndex >= texts.length) {
        currentIndex = 0;
    }

    newText.classList.remove('rotator__case_active');
    texts[currentIndex].classList.add('rotator__case_active')
}, 1000)

