
class GameController {
    constructor() {
        this.running = false;
        this.enemyCountdown = 10;
        this.enemySpawnCooldown = 0;
        this.maxEnemies = 20;
        this.enemyFactory = new EnemyFactory();
    }

    start() {
        this.playerEntity = new Player();
        this.entities = [
            this.enemyFactory.getEnemy()
        ];
        this.running = true;
    }

    update() {
        if (this.running) {
            this.updatePlayer();
            this.updateEntities();
        }
        
        if (this.enemySpawnCooldown++ >= this.enemyCountdown && this.entities.length < this.maxEnemies) {
            this.enemySpawnCooldown = 0;
            this.entities.push(this.enemyFactory.getEnemy());
        }
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
        this.entities.forEach(entity => {
            entity.update();
            entity.draw();
            entity.isCollidingWith(this.playerEntity);
        });

        this.entities = this.entities.filter(e => e.isAlive());
    }
}