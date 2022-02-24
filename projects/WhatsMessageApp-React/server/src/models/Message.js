class Message {
    constructor(genericObject = {id: null, userUid: null, message: null}) {
        this.id = genericObject.id;
        this.userUid = genericObject.userUid;
        this.message = genericObject.message;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getUserUid() {
        return this.userUid;
    }

    setUserUid(userUid) {
        this.userUid = userUid;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
    }
}
module.exports = Message;