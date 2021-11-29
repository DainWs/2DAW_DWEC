class Player extends Entity {

    constructor() {
        super();

        this.id = "player";

        this.jumpForce = 80;
        this.isJumping = false;
        this.isCrouched = false;

        this.modelType = "ellipse";
    }

    jump() {
        if (!this.isJumping && this.isGrounded) {
            this.isJumping = true;
            this.isGrounded = false;
            this.currentYForce = this.jumpForce;
        }
    }

    crouch() {
        this.isCrouched = true;
    }

    rise() {
        this.isCrouched = false;
    }

    setGrounded(isGrounded) {
        super.setGrounded(isGrounded);
        this.isJumping = false;
    }

    getY() {
        return (this.isCrouched) 
            ? this.y - this.height/4 
            : this.y - this.height/2;
    }

    getHeight() {
        return (this.isCrouched) 
            ? this.height/4 
            : this.height/2;
    }
}