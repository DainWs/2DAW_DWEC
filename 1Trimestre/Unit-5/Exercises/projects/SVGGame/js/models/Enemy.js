
class Enemy extends Entity {
    constructor (x = 0, y = window.innerHeight) {
        super();
        this.x = x;
        this.y = y;
        
        this.view = new EnemyView(this);
    }

    setDirection(xDirection) {
        super.setDirection(xDirection);
        if (this.direction != 0) {
            this.height = 10;
        } else {
            this.width = 10;
        }
    }
    
    update() {
        let newXPos = (this.direction * this.speed) + this.x;
        let newYPos = this.y;

        if (!this.isGrounded) {
            this.currentYForce -= this.gravity;
        }

        newXPos -= this.currentXForce;
        newYPos -= this.currentYForce;
        
        if (
            (this.direction == -1 && newXPos < 0) ||
            (this.direction == 1 && newXPos >= (window.innerWidth - this.width)) ||
            (this.direction == 0 && newYPos >= window.innerHeight) 
        ) {
            this.hurt();
        }

        this.x = newXPos;
        this.y = newYPos;
    }

    onCollision(collider) {
        if (collider instanceof Player) {
            collider.hurt();
            this.hurt();
            this.draw();
        }
    }
}