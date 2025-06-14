import { character } from './character.js';

// Setting the name, class, level, and health
const characterName = document.querySelector('.name');
const characterClass = document.querySelector('#class');
const characterLevel = document.querySelector('#level');
const characterHealth = document.querySelector('#health');
const characterImage = document.querySelector('.image');

function updateCharacterDisplay() {
    characterName.textContent = character.name;
    characterClass.textContent = character.class;
    characterLevel.textContent = character.level;
    characterHealth.textContent = character.health;
    characterImage.setAttribute('src', character.image);
}

updateCharacterDisplay();

document.querySelector('#attacked').addEventListener('click', () => {
character.attacked();
updateCharacterDisplay();
});

document.querySelector('#levelup').addEventListener('click', () => {
character.levelUp();
updateCharacterDisplay();
});