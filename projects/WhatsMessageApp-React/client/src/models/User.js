class User {
    constructor(genericObject = {uid: null, displayName: null, pendingMessages: 0}) {
        this.uid = genericObject.uid;
        this.displayName = genericObject.displayName;
        this.pendingMessages = genericObject.pendingMessages ?? 0;
    }

    getUid() {
        return this.uid;
    }

    getName() {
        return this.displayName;
    }

    getPendingMessages() {
        return this.pendingMessages;
    }
}
export default User;