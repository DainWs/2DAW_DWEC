import { getDatabase, set, ref, onValue, get, push, child } from "firebase/database";
import { FIREBASE_APP } from "./FirebaseApp";
class DatabaseManager {
    constructor() {
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
    }

    update(newValues) {
        this.products = Object.values(newValues);
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
        return this.products;
    }
}
export const DBManagerInstance = new DatabaseManager();

var callbacks = [];

function updatePromise(snapshot) {
    DBManagerInstance.update(snapshot.val());
    callbacks.forEach((callback) => callback())
}

function registre(callback) {
    callbacks.push(callback);
}

export {registre};