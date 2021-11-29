
class GameController {
    constructor() {
        this.playerEntity = new Player();
        this.entities = [
            new Enemy(100)
        ];
    }

    update() {
        this.updatePlayer();
        this.updateEntities();
    }

    updatePlayer() {
        let direction = 0;
        if (keypressed['a']) {
            direction = -1;
        }
        else if (keypressed['d']) {
            direction = 1;
        }
        
        this.playerEntity.setDirection(direction);

        if(keypressed['w']) {
            this.playerEntity.jump();
        }

        if(keypressed['s']) {
            this.playerEntity.crouch();
        } else {
            this.playerEntity.rise();
        }

        this.playerEntity.update();
        this.playerEntity.draw();
    }

    updateEntities() {

    }
}