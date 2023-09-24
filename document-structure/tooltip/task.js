const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((string) => {
    string.addEventListener('click', (event) => {

        event.preventDefault();

        const text = string.getAttribute('title');
        tooltip.textContent = text;

        const position = string.getBoundingClientRect();
        tooltip.style.left = position.left + 'px';
        tooltip.style.top = position.bottom + 'px';

        tooltip.classList.toggle('tooltip_active');
        
  });
});