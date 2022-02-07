import { goOnline, goOffline, ref, push } from "firebase/database";
class DatabaseManager {
    constructor() {}

    setProduct(product) {
        goOnline();
        var reference = ref(`products/${product}`);
        push(reference, JSON.stringify(product));
        goOffline();
    }

    getProducts() {
        goOnline();
        var products = ref('products').toJSON();
        goOffline();
        console.log(products);
        return products;
    }
}
let DBManagerInstance = new DatabaseManager();
export default DBManagerInstance;