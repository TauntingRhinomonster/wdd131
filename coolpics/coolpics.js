const nav = document.querySelector('#mainNav');
const menu = document.querySelector('#menu');

menu.addEventListener('click', openCloseMenu);

function openCloseMenu() {
    nav.classList.toggle('hidden');
}

