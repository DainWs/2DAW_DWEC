import { getDatabase, set, ref, onValue, get, push, child } from "firebase/database";
import Product from "../../models/Product";
import { FIREBASE_APP } from "./FirebaseApp";

class DatabaseService {
    constructor() {
        this.products = [];
        this.observers = [];
    }

    update(newValues) {
        this.products = [];
        let productsValues = Object.values(newValues);
        for (let product of productsValues) {
            this.products[product.id] = new Product(product);
        }

        this.notifyAll();
    }

    setProduct(product) {
        let db = getDatabase();
        if (product.id == undefined) {
            product.id = push(ref(db, '/products')).key;
        }
        set(ref(db, `products/${product.id}`), product);
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
        set(ref(db, `orders/${order.getUserID()}/${order.id}`), order)
            .then(() => {
                /* Update all products stock on this order */
                for (let orderLine of order.getOrders()) {
                    let product = orderLine.getProduct()
                    let newStock = (product.getStock() - orderLine.getUnits());
                    product.setStock(newStock);
                    set(ref(db, `products/${product.id}`), product);
                }
            });
    }

    registre(componentClass, callback) {
        console.log(`Registering ${componentClass}`);
        this.observers[componentClass] = callback;
    }
    
    unregistre(componentClass) {
        console.log(`Unregistering ${componentClass}`);
        delete this.observers.splice[componentClass];
    }

    notifyAll() {
        Object.values(this.observers)
            .forEach( (observer) => observer() );
    }
}
export const dbService = new DatabaseService();

if (FIREBASE_APP) {
    let db = getDatabase();
    var references = ref(db, 'products');
    onValue(references, (snapshot) => dbService.update(snapshot.val()) );
    get(ref(db, 'products'))
        .then( (snapshot) => dbService.update(snapshot.val()) )
        .catch( (error) => console.error(error) );
}