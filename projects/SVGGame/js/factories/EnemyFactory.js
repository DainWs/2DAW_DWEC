import { Enemy } from "../models/Enemy.js";

class EnemyFactory {
    constructor() {
        this.progresiveDificultCooldown = 0;
        this.progresiveDificult = 1;

    }

    getEnemy() {

        if (this.progresiveDificultCooldown++ >= 5 && this.progresiveDificult <= 10 ) {
            this.progresiveDificultCooldown = 0;
            this.progresiveDificult += 1;
        }

        let entity = null;
        /**
         * 1 = from Left to Right
         * 2 = from Top to Bottom
         * 3 = from Right to Left
         */
        let position = Math.trunc((Math.random() * 3) + 1);

        let maxX = window.innerWidth;
        let maxY = window.innerHeight;
        let x = 0;
        let y = 0;

        if (position == 3 && this.progresiveDificult >= 5) {
            x = maxX + 100;
            y = (maxY-30) - Math.trunc(Math.random() * 300);
            entity = new Enemy(x, y);
            entity.setDirection(-1);
        }
        else if (position == 2 && this.progresiveDificult > 2) {
            x = Math.trunc(Math.random() * maxX);
            y = -100;
            entity = new Enemy(x, y);
            entity.setDirection(0);
            entity.applyForce(0, -(5 + this.progresiveDificult));
        }
        else {
            x = -100;
            y = (maxY-30) - Math.trunc(Math.random() * 300);
            entity = new Enemy(x, y);
            entity.setDirection(1);
        }

        entity.setSpeed(5 + this.progresiveDificult);

        return entity;
    }
}

export { EnemyFactory };