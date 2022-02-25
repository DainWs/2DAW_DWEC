import Chat from "./Chat";

class PublicChat extends Chat {
    constructor(genericObject = { id: '', messages: [] }) {
        super(genericObject.id);
        this.setMessages(genericObject.messages);
    }

    belongsTo(users) {
        return true;
    }
}
export default PublicChat;