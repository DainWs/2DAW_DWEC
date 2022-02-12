import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FIREBASE_APP } from "./FirebaseApp";
class StorageService {
    constructor() {
        if (FIREBASE_APP) {
            this.storage = getStorage(FIREBASE_APP, "gs://chinospaco-tienda-react.appspot.com");
        }
    }

    getImagePromiseURL(productID) {
        let reference = ref(this.storage, `products/${productID}.jpg`);
        
        return getDownloadURL(reference)
            .catch((error) => {
                console.log(error);
            });
    }

    uploadProductImage() {
        //Not supported
    }
}
export const storageService = new StorageService();