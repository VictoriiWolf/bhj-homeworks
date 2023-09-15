const reveal = document.querySelectorAll('.reveal');

addEventListener('scroll', () => {
  const height = window.innerHeight;
  const firstRevealY = reveal[0].getBoundingClientRect().y; 
  const firstRevealB = reveal[0].getBoundingClientRect().bottom; 
  const secondRevealY = reveal[1].getBoundingClientRect().y; 
  const secondRevealB = reveal[1].getBoundingClientRect().bottom; 

  if(firstRevealY >= 0 && firstRevealB <= height) {
    reveal[0].classList.add('reveal_active');
  } else {
    reveal[0].classList.remove('reveal_active');
  }

  if(secondRevealY >= 0 && secondRevealB <= height) {
    reveal[1].classList.add('reveal_active');
  } else {
    reveal[1].classList.remove('reveal_active');
  }

});