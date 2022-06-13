const btnDown = document.getElementById('down');
const btnUp = document.getElementById('up');
const container = document.querySelector('.main__container');

btnDown.addEventListener('click', () => {
  container.style.marginTop = '-100vh';
})

btnUp.addEventListener('click', () => {
  container.style.marginTop = '0';
})