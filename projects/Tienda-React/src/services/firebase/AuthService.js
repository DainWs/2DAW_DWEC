import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import Order from '../../models/Order';
import User from '../../models/User';
import { localStorageService } from '../LocalStorageService';

class AuthService {
    login(onCompleteCallback = function() {}) {
        let auth = getAuth();
        auth.languageCode = 'it';
        let provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                let user = new User(result.user, result.user.stsTokenManager.expirationTime);
                console.log(result.user);
                localStorageService.saveUser(user);
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
                console.log(result);
                localStorageService.deleteUser();
                console.log('Successfully logout!');
                onCompleteCallback(true);
            }).catch((error) => {
                console.log(error);
                onCompleteCallback(false);
            });
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
export const authService = new AuthService();