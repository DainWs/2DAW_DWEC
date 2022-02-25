class Message {
    constructor(genericObject = {id: null, userUid: null, message: null, attachment: null}) {
        this.id = (genericObject.id) ? genericObject.id : new Date().getTime();
        this.userUid = (genericObject.userUid) ? genericObject.userUid : -1;
        this.message = (genericObject.message) ? genericObject.message : '';
        this.attachment = (genericObject.attachment) ? genericObject.attachment : null;
    }

    getId() {
        return this.id;
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

    getAttachment() {
        return this.attachment;
    }

    setAttachment(attachment) {
        this.attachment = attachment;
    }
}
export default Message;