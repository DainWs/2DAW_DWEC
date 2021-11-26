class Player {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.isJumping = false;
        this.jumpForce = 40;
        this.currentYForce = 0;
        this.gravity = 10;
        this.speed = 20;
        this.width = 80;
        this.height = 80;
    }

    initialize() {
        this.x = this.width/2;
        this.y = window.innerHeight - (this.height/2);
    }

    update(xDirection) {
        let newXPos = (xDirection * this.speed) + this.x;
        if (newXPos < 0) {
            newXPos = 0;
        }
        else if (newXPos > window.innerWidth) {
            newXPos = window.innerWidth;
        }

        let newYPos = this.y;
        if (this.isJumping) {
            this.currentYForce -= this.gravity
            newYPos -= this.currentYForce;

            if (newYPos >= window.innerHeight - (this.height/2)) {
                this.isJumping = false;
                this.currentYForce = 0;
            }
        }

        this.x = newXPos;
        this.y = newYPos;
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.currentYForce = this.jumpForce;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}