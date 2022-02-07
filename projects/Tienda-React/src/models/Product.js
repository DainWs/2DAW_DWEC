import Categories from "./Categories";

class Product {
    constructor(name = '', category = Categories.TEXTILES) {
        this.name = name;
        this.category = category;
    }

    getName() {
        return this.name;
    }

    getCategory() {
        return this.category;
    }
}

export default Product;