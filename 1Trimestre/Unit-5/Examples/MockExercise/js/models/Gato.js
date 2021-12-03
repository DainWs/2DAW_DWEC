class Gato {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.count = 0;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCount() {
        return this.count;
    }

    incrementCount() {
        this.count++;
    }
}

export { Gato };