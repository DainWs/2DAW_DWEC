
class Entity {
    constructor() {
        this.id = "";
        this.x = 0;
        this.y = window.innerHeight;
        
        this.direction = 0;
        this.speed = 10;
        
        this.width = 80;
        this.height = 80;

        this.currentXForce = 0;
        this.currentYForce = 0;
        this.gravity = 5;

        this.isGrounded = true;

        this.lifes = 1;

        this.view = null
    }

    update() {
        let newXPos = (this.direction * this.speed) + this.x;
        let newYPos = this.y;

        if (!this.isGrounded) {
            this.currentYForce -= this.gravity;
        }

        newXPos -= this.currentXForce;
        newYPos -= this.currentYForce;
        
        if (newXPos < 0) {
            newXPos = 0;
        } else if (newXPos >= (window.innerWidth - this.width)) {
            newXPos = window.innerWidth - this.width;
        }

        if (newYPos >= window.innerHeight) {
            this.currentYForce = 0;
            this.setGrounded(true);
        }

        this.x = newXPos;
        this.y = newYPos;
    }

    isCollidingWith(collision) {
        if (
            (this.getX() < (collision.getX() + collision.getWidth())) &&
            ((this.getX() + this.getWidth()) > collision.getX()) &&
            (this.getY() < (collision.getY() + collision.getHeight())) &&
            ((this.getY() + this.getHeight()) > collision.getY())
        ) {
            this.onCollision(collision);
        }
    }
    
    onCollision(collider) {

    }

    getCollisionBox() {
        let collisionbox = new CollisionBox();
        collisionbox.setX(this.x);
        collisionbox.setY(this.y);
        collisionbox.setWidth(this.width);
        collisionbox.setHeight(this.height);
        return collisionbox;
    }

    getLifes() {
        return this.lifes;
    }

    hurt() {
        this.lifes--;
    }

    isAlive() {
        return (this.lifes > 0);
    }

    getId() {
        return this.id;
    }

    applyForce(xForce = 0, yForce = 0) {
        this.currentXForce = xForce;
        this.currentYForce = yForce;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setDirection(xDirection) {
        let result = 0;
        if (xDirection < 0) {
            result = -1;
        } else if (xDirection > 0) {
            result = 1;
        } else {
            result = 0;
        }
        this.direction = result;
    }

    getDirection() {
        return this.direction;
    }

    setGrounded(isGrounded) {
        this.isGrounded = isGrounded;
    }

    getGrounded() {
        return this.isGrounded;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    draw() {
        if (this.isAlive()) {
            this.view.draw(this);
        } else {
            this.view.undraw(this);
        }
    }
}

export { Entity };