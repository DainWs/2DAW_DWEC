class IA extends Player {
    constructor(num) {
        super(num, `IA ${num}`);
    }

    createAction() {
        this.setAction(getRandomAction());
    }
}