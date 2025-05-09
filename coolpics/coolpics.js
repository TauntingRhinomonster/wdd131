// Saving the navbar and the menu button elements
const nav = document.querySelector('#mainNav');
const menu = document.querySelector('#menu');

// Adding an event listener to the menu button
menu.addEventListener('click', openCloseMenu);
// Function toggles 'hidden' class so the links appear and disappear
function openCloseMenu() {
    nav.classList.toggle('hidden');
}

// BELOW WAS PARTIALLY FROM ChatGPT
// I modified it to be used in this program

const screenSize = window.matchMedia('(min-width: 900px)'); // Define the min-width
// Function to remove the class when the condition is met
function removeClassOnMinWidth(size) {
    if (size.matches) { // Checking if screen is at least 900px wide
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
}
// Listen for changes in screen size
screenSize.addEventListener('change', removeClassOnMinWidth);
