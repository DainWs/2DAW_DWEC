import { getRandomAction } from "../Utils/ActionUtils.js";
import { Player } from "./Player.js";

class IA extends Player {
    constructor(num) {
        super(num, `IA ${num}`);
    }

    createAction() {
        this.setAction(getRandomAction());
    }
}

export { IA };