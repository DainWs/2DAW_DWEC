import { CookieFactory } from "../factories/CookieFactory.js";
import { EnemyFactory } from "../factories/EnemyFactory.js";
import { Player } from "../models/Player.js";
import { UIView } from "../views/UIView.js";

const keypressed = [];
keypressed['a'] = false;
keypressed['d'] = false;
keypressed['w'] = false;
keypressed['s'] = false;

class GameController {
    constructor() {
        this.running = false;
        this.enemyCountdown = 90;
        this.enemyProgresiveCountdown = 0;
        this.enemyProgresiveValue = 5;
        this.enemySpawnCooldown = 0;
        this.maxEnemies = 20;
        this.enemyFactory = new EnemyFactory();
        this.uiView = new UIView();
    }

    start() {
        this.playerEntity = new Player();
        this.timer = Date.now();
        this.entities = [
            this.enemyFactory.getEnemy()
        ];
        this.running = true;
    }

    update() {
        if (this.running) {
            this.updatePlayer();
            this.updateEntities();

            if (this.enemySpawnCooldown++ >= this.enemyCountdown && this.entities.length < this.maxEnemies) {
                this.enemySpawnCooldown = 0;
                this.entities.push(this.enemyFactory.getEnemy());
                if (this.enemyProgresiveCountdown++ >= 10 && this.enemyCountdown > 20 ) {
                    this.enemyProgresiveCountdown = 0;
                    this.enemyCountdown -= this.enemyProgresiveValue;
                    this.enemyProgresiveValue *= 2;
                }
            }
    
            this.uiView.updateLifes(this.playerEntity.getLifes());

            let timeDiff = Date.now() - this.timer;
            let score = Math.trunc(timeDiff/100);
            this.uiView.updateScore(score);

            if (!this.playerEntity.isAlive()) {
                this.running = false;
                this.showEndScreen();
            }
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

    isRunning() {
        return this.running;
    }

    showEndScreen() {
        let timeDiff = Date.now() - this.timer;
        let time = `${Math.round(timeDiff / 1000)} seconds`;
        let score = Math.trunc(timeDiff/100);

        let cookieFactory = new CookieFactory();
        let highScore = cookieFactory.get("highScore", 0);

        this.uiView.showEnd(time, score, highScore);

        if (score > highScore) {
            cookieFactory.new("highScore", score);
        }
    }
}

export { GameController, keypressed };