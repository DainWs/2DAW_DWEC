import { getDatabase, set, ref, onValue, get, child } from "firebase/database";
import { FIREBASE_APP } from "./Firebase";
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
        this.products = newValues;
    }

    setProduct(product) {
        if (product.id == undefined) {
            product.id = `${product.name}_` + new Date().getTime();
        }
        console.log(product);
        let db = getDatabase();
        set(ref(db, `products/${product.id}`), product).then((v) => {
            console.log('completed');
        });
    }

    getProducts() {
        
          
        console.log(this.products);
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