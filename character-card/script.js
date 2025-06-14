const character = {
    name: "Hedge Boy",
    class: "Grassland Hedgehog Warrior",
    level: 1,
    health: 20,
    image: 'Sanic.webp',
    attacked() {
        if (this.health >= 20) {
            this.health -= 20;
        } else {
            alert('Ya boi is gone!');
        }
        characterHealth.textContent = character.health;
    },
    levelUp() {
        this.level += 1;
        this.health += 80;
        characterLevel.textContent = character.level;
        characterHealth.textContent = character.health;
    }
};

// Setting the name, class, level, and health
const characterName = document.querySelector('.name');
characterName.textContent = character.name;
const characterClass = document.querySelector('#class');
characterClass.textContent = character.class;
const characterLevel = document.querySelector('#level');
characterLevel.textContent = character.level;
const characterHealth = document.querySelector('#health');
characterHealth.textContent = character.health;
const characterImage = document.querySelector('.image');
characterImage.setAttribute('src', character.image);

// Listen for events that fire when user click the 'Attacked' and 
// 'Level Up' buttons. Use the character methods .attacked() and .levelUp() 
// to increase and decrease the level and health properties.
const atkButton = document.querySelector('#attacked');
const lvlUpButton = document.querySelector('#levelup');
atkButton.addEventListener('click', () => {
    character.attacked();
});
lvlUpButton.addEventListener('click', () => {
    character.levelUp();
});