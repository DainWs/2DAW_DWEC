import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

function login() {
    let auth = getAuth();
    auth.languageCode = 'it';
    let provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            localStorage.setItem('userToken', credential.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            console.log('Successfully registered!');
        }).catch((error) => {
            console.log(error);
        });
}

function logout() {
    let auth = getAuth();
    signOut(auth)
        .then((result) => {
            localStorage.removeItem('userToken');
            localStorage.removeItem('user');
        }).catch((error) => {
            console.log(error);
        });
}

export {login, logout};