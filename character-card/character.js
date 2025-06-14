export const character = {
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
    },
    levelUp() {
        this.level += 1;
        this.health += 80;
    }
};