class Message {
    constructor(id = null, message = null) {
        this.id = (id !== null) ? id : new Date().getTime();
        this.message = (message !== null) ? message : '';
    }

    getId() {
        return this.id;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message) {
        this.message = message;
    }
}
export default Message;