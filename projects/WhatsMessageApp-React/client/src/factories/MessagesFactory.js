import Message from "../models/Message";

class MessageFactory {
    getMessage() {
        return new Message();
    }

    parseMessages(messages) {
        console.log(messages);
        let parsedMessages = [];
        if (Array.isArray(messages)) {
            for (const key in messages) {
                let message = messages[key];
                if (!(message instanceof Message)) {
                    message = new Message(message);
                }
                parsedMessages.splice(message.getId(), 0, message);
            }
        }
        console.log(parsedMessages);
        return parsedMessages;
    }
}
export default MessageFactory;