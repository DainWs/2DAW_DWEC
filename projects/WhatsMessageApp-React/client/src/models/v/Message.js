class Message {
    constructor(genericObject = {id: null, userUid: null, message: null, attachment: null}) {
        if (genericObject.id == undefined || genericObject.id == null) {
            genericObject.id = new Date().getTime();
        }
        this.id = genericObject.id;
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

    getMessage() {
        return this.message;
    }

    getAttachment() {
        return this.attachment;
    }
}
export default Message;