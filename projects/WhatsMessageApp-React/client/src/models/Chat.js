import Message from "./Message";

class Chat {
    constructor(genericObject = {id: [], messages: []}) {
        this.id = genericObject.id;
        this.messages = [];
        console.log(genericObject);
        for(let i in genericObject.messages) {
            let messageGenericObject = genericObject.messages[i];
            this.messages[i] = new Message(messageGenericObject);
        }
    }

    getId() {
        return this.id;
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
    
    equals(chat) {
        let myChatId = this.id.sort();
        console.log(myChatId);
        let heChatId = chat.id.sort();
        console.log(heChatId);
        const arrayEquals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        return arrayEquals(myChatId, heChatId);
    }
}
export default Chat;