
class Enemy extends Entity {
    constructor (x = 0, y = window.innerHeight) {
        super();
        this.x = x;
        this.y = y;

        this.view = new EnemyView(this);
    }

    update() {
    }
    
    onCollision(collider) {
        if (collider instanceof Player) {
            console.log("the player was hurted");
            collider.hurt();
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y - this.height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}