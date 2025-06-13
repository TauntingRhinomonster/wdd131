const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };