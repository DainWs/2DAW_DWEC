import MessageFactory from "../../factories/MessagesFactory";
class Chat {
    constructor(id) {
        this.id = (id) ? id : new Date().getTime();
        this.messages = [];
    }

    getId() {
        return this.id;
    }

    getMessages() {
        return this.messages;
    }

    setMessages(messages) {
        this.messages = new MessageFactory().parseMessages(messages);
    }

    belongsTo(users) {
        return false;
    }
    
    equals(otherChat) {
        return (this.id === otherChat.id);
    }
}
export default Chat;