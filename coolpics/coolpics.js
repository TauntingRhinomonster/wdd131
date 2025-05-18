// ||| Variables
const nav = document.querySelector('#mainNav');
const menu = document.querySelector('#menu');
const gallery = document.querySelector('.gallery');



// ||| FUNCTIONS
// Function toggles 'hidden' class so the links appear and disappear
function openCloseMenu() {
    nav.classList.toggle('hidden');
}

function constructViewerImage(clickedImage) {
    const smallSrc = clickedImage.getAttribute('src');
    const baseName = smallSrc.split('-')[0]; // "norris"
    const fullSrc = baseName + '-full.jpeg'; // "norris-full.jpeg"
    displayImagePopUp(fullSrc);
}

function displayImagePopUp(src) {
    console.log('function triggered');
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';
    dialog.innerHTML = `<img src="${src}" alt='big picture'><button class='close-viewer'>X</button>`;
    document.body.appendChild(dialog);
    const closeBtn = document.querySelector('.close-viewer');
    closeBtn.addEventListener('click', closePopUp);
    dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
        dialog.remove();
    }
    });
    dialog.showModal();
}

function closePopUp() {
    const dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
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

gallery.addEventListener('click', (event)=> {
    const clickedImage = event.target.closest('img');
    if (clickedImage) {
        constructViewerImage(clickedImage);
    }
});

// This was how I did it the first time.
// gallery.forEach(img => {
//     img.addEventListener('click', displayImagePopUp);
// });