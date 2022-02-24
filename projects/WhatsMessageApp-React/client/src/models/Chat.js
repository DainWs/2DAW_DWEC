import Message from "./Message";

class Chat {
    constructor(genericObject = {userOneUid: null, userTwoUid: null, messages: []}) {
        this.id = `${genericObject.userOneUid}-${genericObject.userTwoUid}`;
        this.userOneUid = genericObject.userOneUid;
        this.userTwoUid = genericObject.userTwoUid;
        this.messages = genericObject.messages;
    }

    getId() {
        return this.id;
    }

    getUserOneUid() {
        return this.userOneUid;
    }

    getUserTwoUid() {
        return this.userTwoUid;
    }

    getMessages() {
        return this.messages;
    }

    addMessage(fromUserUid, message) {
        let messageObj = new Message();
        messageObj.setUserUid(fromUserUid);
        messageObj.setMessage(message);
        let newId = this.messages.push(messageObj);
        messageObj.setId(newId);
    }

    belongsTo(user) {
        return (this.id.includes(user.getUid()));
    }
}
export default Chat;