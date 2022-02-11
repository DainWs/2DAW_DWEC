import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import Order from '../models/Order';
import Carrito from '../pages/components/Carrito';

class SessionManager {
    login(onCompleteCallback = function() {}) {
        let auth = getAuth();
        auth.languageCode = 'it';
        let provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                localStorage.setItem('userToken', credential.accessToken);
                localStorage.setItem('userUID', result.user.uid);
                localStorage.setItem('user', JSON.stringify(result.user));
                console.log('Successfully registered!');
                onCompleteCallback(true);
            }).catch((error) => {
                console.log(error);
                onCompleteCallback(false);
            });
    }

    logout(onCompleteCallback = function() {}) {
        let auth = getAuth();
        signOut(auth)
            .then((result) => {
                localStorage.removeItem('userToken');
                localStorage.removeItem('userUID');
                localStorage.removeItem('user');
                onCompleteCallback(true);
            }).catch((error) => {
                console.log(error);
                onCompleteCallback(false);
            });
    }

    getUserToken() {
        return localStorage.getItem('userToken');
    }
    
    getUserUID() {
        return localStorage.getItem('userUID');
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCarrito() {
        let order = localStorage.getItem('carrito');
        if (order == null) {
            order = new Order()
        } else {
            order = new Order(order);
        }

        let token = this.getUserUID();
        if (token != null) {
            order.setUserUID(token);
        }
        return order;
    }

    clearCarrito() {
        let order = new Order();
        let token = this.getUserUID();
        if (token != null) {
            order.setUserUID(token);
        }
        localStorage.setItem('carrito', JSON.stringify(order));
    }
}
const SessionManagerInstance = new SessionManager();
export {SessionManagerInstance};