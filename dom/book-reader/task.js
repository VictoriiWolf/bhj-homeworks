const fontSizes = document.querySelectorAll('a');
let book = document.querySelector('.book')

function pushButton(event) {
  fontSizes.forEach(el => {
    el.classList.remove('font-size_active')
  })

  this.classList.add('font-size_active');
  event.preventDefault();

  let option = 0;

  fontSizes.forEach((i, index) => {
    if(i.classList.contains('font-size_active')) {
      option = index;
    }
    
    if(option === 0) {
      book.classList.add('book_fs-small');
      book.classList.remove('book_fs-big');
    } else if(option === 1) {
      book.classList.remove('book_fs-small')
      book.classList.remove('book_fs-big')
    } else if(option === 2) {
      book.classList.add('book_fs-big');
      book.classList.remove('book_fs-small')
    }
  });
}

  fontSizes.forEach(el => {
    el.addEventListener('click', pushButton)
  })