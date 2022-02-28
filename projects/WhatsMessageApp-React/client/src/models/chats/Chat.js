import MessageFactory from "../../factories/MessagesFactory";
class Chat {
    constructor(id) {
        this.id = (id) ? id : new Date().getTime();
        this.messages = [];
        this.writingUsers = [];
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

    getWritingUsers() {
        return this.writingUsers;
    }
    
    setWritingUsers(writingUsers) {
        if (Array.isArray(writingUsers)) {
            this.writingUsers = writingUsers;
        }
    }

    addWritingUser(user) {
        this.writingUsers.push({id: user.getId(), name: user.getName()});
    }

    removeWritingUser(user) {
        let userIndex = this.writingUsers.findIndex((writingUser) => writingUser.id === user.getId());
        if (userIndex != undefined) {
            this.writingUsers.splice(userIndex, 1);
        }
    }

    belongsTo(users) {
        return false;
    }
    
    equals(otherChat) {
        return (this.id === otherChat.id);
    }
}
export default Chat;