class Product {
    constructor(genericObject) {
        this.name = genericObject.name;
        this.price = genericObject.price;
        this.category = genericObject.category;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setCategory(category) {
        this.category = category;
    }

    getCategory() {
        return this.category;
    }
}

export default Product;