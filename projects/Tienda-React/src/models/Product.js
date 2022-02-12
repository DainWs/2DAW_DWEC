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
//Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. 
export default Product;