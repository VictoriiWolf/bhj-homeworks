const fontSizes = Array.from(document.querySelectorAll('a'));
let book = document.querySelector('.book')
let size;

function pushButton(event) {
  fontSizes.forEach(el => {
    el.classList.remove('font-size_active')
  })

  this.classList.add('font-size_active');
  el.dataset.size // как заставить эту вещь менять размер шрифта?
  event.preventDefault();
}


  fontSizes.forEach(el => {
    el.addEventListener('click', pushButton)
  })