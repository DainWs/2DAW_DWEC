class Action {

    constructor(actionName) {
        if (this.constructor === Action) {
            throw new TypeError('Abstract class "Action" cannot be instantiated directly.'); 
        }

        this.name = actionName;
    }

    getWinsAgainst() {
        throw new TypeError('Abstract function "getWinsAgainst" has not been instantiated.'); 
    }

    getLoseAgainst() {
        throw new TypeError('Abstract function "getWinsAgainst" has not been instantiated.'); 
    }
}