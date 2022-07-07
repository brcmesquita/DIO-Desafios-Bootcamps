const body = document.getElementsByTagName('body');
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer');

function toggleDarkMode(){
  body[0].classList.toggle('dark-mode');
  body[0].classList.contains('dark-mode') ?  h1.innerText = 'Dark Mode ON' :  h1.innerText = 'Light Mode ON';
  button.classList.toggle('dark-mode');
  button.classList.contains('dark-mode') ?  button.innerText = 'Light Mode' :  button.innerText = 'Dark Mode';
  footer[0].classList.toggle('dark-mode');
}

button.addEventListener('click', toggleDarkMode);