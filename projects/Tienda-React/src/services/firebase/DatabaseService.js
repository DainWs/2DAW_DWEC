import { getDatabase, set, ref, onValue, get, push, child } from "firebase/database";
import Product from "../../models/Product";
import { FIREBASE_APP } from "./FirebaseApp";
var callbacks = [];

class DatabaseService {
    constructor() {
        this.products = [];
    }

    update(newValues) {
        this.products = [];
        let productsValues = Object.values(newValues);
        for (let product of productsValues) {
            this.products[product.id] = new Product(product);
        }
    }

    setProduct(product) {
        let db = getDatabase();
        if (product.id == undefined) {
            product.id = push(child(ref(db), 'products')).key;
        }
        set(ref(db, `products/${product.id}`), product).then((v) => {
            console.log('completed');
        });
    }

    getProducts() {
        return Object.values(this.products);
    }

    getProduct(id) {
        return this.products[id];
    }

    setOrder(order) {
        let db = getDatabase();
        if (order.id == undefined) {
            order.id = push(child(ref(db), `orders/${order.getUserID()}`)).key;
        }
        set(ref(db, `orders/${order.getUserID()}/${order.id}`), order).then((v) => {
            console.log('completed');
        });
    }

    registre(componentClass, callback) {
        callbacks[componentClass] = callback;
        console.log('registre');
        console.log(componentClass);
    }
    
    unregistre(componentClass) {
        delete callbacks[componentClass];
        console.log(componentClass);
    }
}
export const dbService = new DatabaseService();

if (FIREBASE_APP) {
    let db = getDatabase();
    var references = ref(db, 'products');
    onValue(references, updatePromise);
    get(ref(db, 'products'))
        .then(updatePromise)
        .catch((error) => {
            console.error(error);
        });
}

function updatePromise(snapshot) {
    console.log(snapshot.val());
    dbService.update(snapshot.val());
    console.log('callbacks');
    console.log(callbacks);
    Object.values(callbacks)
        .forEach(
            (callback, index) => {
                console.log(callback);
                callback()
            });
}