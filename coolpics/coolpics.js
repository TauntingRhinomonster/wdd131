// ||| Variables
const nav = document.querySelector('#mainNav');
const menu = document.querySelector('#menu');
const dialogElement = document.querySelector('#dialogElement');
const images = document.querySelectorAll('.gallery img');
const closeBtn = document.querySelector('.close-viewer');


// ||| FUNCTIONS
// Function toggles 'hidden' class so the links appear and disappear
function openCloseMenu() {
    nav.classList.toggle('hidden');
}

function displayImagePopUp() {
    console.log('You clicked me!')
    dialogElement.showModal();
}

function closePopUp() {
    dialogElement.close();
}

// BELOW WAS PARTIALLY FROM ChatGPT
// I modified it to be used in this program
const screenSize = window.matchMedia('(min-width: 900px)'); // Define the min-width
// Function to remove the class when the condition is met
function handleResize(size) {
    if (size.matches) { // Checking if screen is at least 900px wide
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
}
// ||| Event Listeners
screenSize.addEventListener('change', handleResize);
menu.addEventListener('click', openCloseMenu);
images.forEach(img => {
    img.addEventListener('click', displayImagePopUp);
});
closeBtn.addEventListener('click', closePopUp)

// ||| Testing
console.log(images);