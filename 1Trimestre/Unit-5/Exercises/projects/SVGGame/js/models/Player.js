import { PlayerView } from "../views/PlayerView.js";
import { Entity } from "./Entity.js";

class Player extends Entity {

    constructor() {
        super();

        this.x = (window.innerWidth/2) - (this.width/2);

        this.id = "player";

        this.jumpForce = 50;
        this.isJumping = false;
        this.isCrouched = false;
        
        this.lifes = 8;
        this.hurtCooldown = 0;

        this.speed = 20;

        this.view = new PlayerView(this);
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

    hurt() {
        if (this.hurtCooldown <= 0) {
            super.hurt();
            this.hurtCooldown = 1;

            //Syncronice
            setTimeout((entity) => { entity.hurtCooldown = 0; }, 1000, this);
            this.view.changeColorForMilis("red", 1000);
        }
    }

    setGrounded(isGrounded) {
        super.setGrounded(isGrounded);
        this.isJumping = false;
    }

    getY() {
        return (this.isCrouched) 
            ? this.y - this.height/2 
            : this.y - this.height;
    }

    getHeight() {
        return (this.isCrouched) 
            ? this.height/2 
            : this.height;
    }
}

export { Player };