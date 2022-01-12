import { getRandomAction, getRandomActionNotEqual } from "../Utils/ActionUtils.js";
import { Player } from "./Player.js";

class IA extends Player {
    constructor(num) {
        super(num, `IA ${num}`);
    }

    createAction() {
        let newAction = getRandomAction();
        if (this.action == newAction) {
            let probability = ((Math.random() * 100) + 1) > 50;
            if (probability) {
                newAction = getRandomActionNotEqual(this.action);
            }
        }
        this.setAction(newAction);
    }
}

export { IA };