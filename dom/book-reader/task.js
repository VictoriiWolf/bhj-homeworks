const fontSizes = document.querySelectorAll('a');

fontSizes.forEach((el) => {
    el.addEventListener('click', () => {
      if(el.classList.contains('font-size_active')) {
        el.classList.remove('font-size_active');
      };
      el.classList.add('font-size_active');
    });
  });