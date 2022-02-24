const Message = require('./Message');

class Chat {
    constructor(genericObject = {idParts: [], messages: []}) {
        this.id = genericObject.idParts.join('-');
        this.messages = genericObject.messages;
    }

    getId() {
        return this.id;
    }

    getMessages() {
        return this.messages;
    }

    addMessage(message) {
        let messageObj = new Message(message);
        let newId = this.messages.push(messageObj);
        messageObj.setId(newId);
    }
}
module.exports = Chat;