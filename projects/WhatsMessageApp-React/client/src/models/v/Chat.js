class Chat {
    constructor(id) {
        this.id = id;
        this.messages = [];
    }

    getId() {
        return this.id;
    }

    getMessages() {
        return this.messages;
    }

    setMessages(messages) {
        this.messages = new MessagesFactory().parseMessages(messages);
    }

    belongsTo(user) {
        return false;
    }
    
    equals(otherChat) {
        return (this.id === otherChat.id);
    }
}
export default Chat;