class IA extends Player {
    constructor(num) {
        super(num);
    }

    createAction() {
        this.setAction(getRandomAction());
    }
}