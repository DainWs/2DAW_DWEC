
class Entity {
    constructor() {
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

        this.modelType = "rect";
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
        console.log(newXPos);
        console.log((window.innerWidth + this.width));
        console.log(newXPos >= (window.innerWidth + this.width));

        if (newYPos >= window.innerHeight) {
            this.currentYForce = 0;
            this.setGrounded(true);
        }

        this.x = newXPos;
        this.y = newYPos;
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

    getModelType() {
        return this.modelType;
    }

    getModelColor() {
        return "yellow";
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
        if (this.view == null) {
            this.view = new EntityView(this);
        }
        this.view.draw(this);
    }
}