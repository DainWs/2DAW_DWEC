class User {
    constructor(genericObject = {uid: null, displayName: null, email: null, photoURL: null},  expirationTime) {
        this.uid = genericObject.uid;
        this.displayName = genericObject.displayName;
        this.email = genericObject.email;
        this.photoURL = genericObject.photoURL;
        console.log(genericObject);
        this.expirationTime = expirationTime;
    }

    getUid() {
        return this.uid;
    }

    getName() {
        return this.displayName;
    }

    getEmail() {
        return this.email;
    }

    getPhotoURL() {
        return this.photoURL;
    }

    getExpirationTime() {
        return this.expirationTime;
    }

    hasExpired() {
        let currentTime = (new Date()).getTime();
        return (this.expirationTime < currentTime);
    }
}
export default User;