class User {
    constructor(genericObject = {uid: null, displayName: null, pendingMessages: 0, imageId: 1}) {
        this.uid = genericObject.uid;
        this.displayName = genericObject.displayName;
        this.pendingMessages = genericObject.pendingMessages ?? 0;
        this.imageId = genericObject.imageId;
    }

    getUid() {
        return this.uid;
    }

    getImageId() {
        return this.imageId;
    }

    getName() {
        return this.displayName;
    }

    getPendingMessages() {
        return this.pendingMessages;
    }
}
export default User;