import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FIREBASE_APP } from "./Firebase";
class StorageManager {
    constructor() {
        if (FIREBASE_APP) {
            this.storage = getStorage(FIREBASE_APP, "gs://chinospaco-tienda-react.appspot.com");
        }
    }

    getProductImageURL(productID, callback) {
        let reference = ref(this.storage, `products/${productID}.jpg`)
        getDownloadURL(reference)
            .then(callback)
            .catch((error) => {
                console.log(error);
            });
    }

    uploadProductImage() {
        //Not supported
    }
}
export const StorageManagerInstance = new StorageManager();