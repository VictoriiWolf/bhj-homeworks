const fontSizes = document.querySelectorAll('.font-size'); 
const book = document.querySelector('.book'); 

for(let i = 0; i < fontSizes.length; i++) {
  fontSizes[i].addEventListener('click', (event) => {
    event.preventDefault();

    fontSizes.forEach(el => {
      if(el.classList.contains('font-size_active')) {
        el.classList.remove('font-size_active');
      }
    });

    if(!fontSizes[i].classList.contains('font-size_active')) {
      fontSizes[i].classList.add('font-size_active');
    };

    let option = 0;

    fontSizes.forEach((item, index) => {
      if(item.classList.contains('font-size_active')) {
        option = index;
      }
    });

    if(option === 0) {
      book.classList.add('book_fs-small');
      book.classList.remove('book_fs-big');
    } else if(option === 1) {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    } else if(option === 2) {
      book.classList.add('book_fs-big');
      book.classList.remove('book_fs-small');
    };
  });
};