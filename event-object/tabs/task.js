const tabs = document.querySelectorAll('.tab');
const tabsContents = document.querySelectorAll('.tab__content');
const tabNavigation = document.querySelector('.tab__navigation');

let indexEventElement = null;

tabs.forEach((i, index) => {
  i.addEventListener('click', () => {
    indexEventElement = index;
  });
});

tabNavigation.addEventListener('click', (event) => { 
  let eventElement = event.target;

  if(eventElement.classList.contains('tab')) { 
    tabs.forEach((i, index) => {
      i.classList.remove('tab_active');
    });

    eventElement.classList.add('tab_active'); 

    tabsContents.forEach(item => { 
      item.classList.remove('tab__content_active');
    });

    tabsContents[indexEventElement].classList.add('tab__content_active');
    
  };
});