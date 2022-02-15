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
                localStorageService.deleteUser();
                console.log('Successfully logout!');
                onCompleteCallback(true);
            }).catch((error) => {
                console.log(error);
                onCompleteCallback(false);
            });
    }
}
export const authService = new AuthService();