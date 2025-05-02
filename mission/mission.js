const selector = document.querySelector('.selector');
const bodyElement = document.querySelector('body');
const logoImg = document.querySelector('#logoImg');

function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
    let currentOption = selector.options.selectedIndex;
    if (currentOption == 1) {
        bodyElement.setAttribute('class', 'dark');
        logoImg.setAttribute('src', 'byui-logo_white.png');
    } else {
        bodyElement.setAttribute('class', '');
        logoImg.setAttribute('src', 'byui-logo_blue.webp');
    }
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
selector.addEventListener('change', changeTheme);