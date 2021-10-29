class Action {
    name = "";
    constructor(actionName) {
        if (this.constructor === Action) {
            throw new TypeError('Abstract class "Action" cannot be instantiated directly.'); 
        }

        this.name = actionName;
    }

    winsAgainst(action) {
        throw new TypeError('Abstract function has not been instantiated.'); 
    }

    loseAgainst(action) {
        throw new TypeError('Abstract function has not been instantiated.'); 
    }

    getSrc() {
        return `./images/${this.name}.png`;
    }

    equals(actionName) {
        return this.name == actionName;
    }
}