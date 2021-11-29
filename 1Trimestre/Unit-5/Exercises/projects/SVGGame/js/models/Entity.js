
class Entity extends Collider {
    constructor() {
        super();

        this.id = "";
        this.x = 0;
        this.y = window.innerHeight;
        
        this.direction = 0;
        this.speed = 20;
        
        this.width = 80;
        this.height = 80;

        this.currentXForce = 0;
        this.currentYForce = 0;
        this.gravity = 10;

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
        let box = this.getCollisionBox();
        let otherBox = collision.getCollisionBox();
        if (
            (otherBox.getLeft() <= box.getRight()) &&
            (otherBox.getTop() <= box.getBottom()) &&
            (otherBox.getRight() >= box.getLeft()) &&
            (otherBox.getBottom() >= box.getTop())
        ) {
            console.log(box);
            console.log(otherBox);
            console.log(`left ${(box.getLeft() < otherBox.getRight())}`);
            console.log(`top ${(box.getTop() < otherBox.getBottom())}`);
            console.log(`right ${(box.getRight() > otherBox.getLeft())}`);
            console.log(`bottom ${(box.getBottom() > otherBox.getTop())}`);
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

    setDirection(xDirection) {
        let result = 0;
        if (xDirection < 0) {
            result = -1;
        } else if (xDirection > 0) {
            result = 1;
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
        return this.x + this.width/2;
    }

    getY() {
        return this.y - this.height/2;
    }

    getWidth() {
        return this.width/2;
    }

    getHeight() {
        return this.height/2;
    }

    draw() {
        if (this.isAlive()) {
            this.view.draw(this);
        }
    }
}