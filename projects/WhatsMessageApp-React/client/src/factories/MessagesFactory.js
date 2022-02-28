import ClientMessage from "../models/messages/ClientMessage";
import Message from "../models/messages/Message";
import ServerMessage from "../models/messages/ServerMessage";

class MessageFactory {
    getNewClientMessage(user) {
        return new ClientMessage({userUid: user.getId()});
    }

    parseMessages(messages) {
        console.log(messages);
        var instance = this;
        var parsedMessages = [];
        if (Array.isArray(messages)) {
            messages.forEach((messageData) => {
                let message = messageData;
                if (!(messageData instanceof Message)) {
                    message = instance.parseMessage(messageData);
                }
                parsedMessages.splice(message.getId(), 0, message);
            });
        }
        console.log(parsedMessages);
        return parsedMessages;
    }

    parseMessage(message) {
        return (message.userUid !== undefined) 
            ? this.parseClientMessage(message) 
            : this.parseServerMessage(message);
    }

    parseClientMessage(genericObject) {
        return new ClientMessage(genericObject);
    }

    parseServerMessage(genericObject) {
        return new ServerMessage(genericObject);
    }
}
export default MessageFactory;