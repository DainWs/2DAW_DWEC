class Product {
    constructor(genericObject = {id: null, name: '', description: '', price: 0, stock: 0, category: null}) {
        this.id = genericObject.id;
        this.name = genericObject.name;
        this.description = genericObject.description;
        this.price = genericObject.price;
        this.stock = genericObject.stock;
        this.category = genericObject.category;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setStock(stock) {
        this.stock = stock;
    }

    getStock() {
        return this.stock;
    }

    setCategory(category) {
        this.category = category;
    }

    getCategory() {
        return this.category;
    }
}
export default Product;