import PrivateChat from "../models/chats/PrivateChat";
import PublicChat from "../models/chats/PublicChat";

class ChatFactory {
    parseChat(chat) {
        return (chat.participants == undefined) 
            ? this.parsePublicChat(chat) 
            : this.parsePrivateChat(chat);
    }

    getPublicChat() {
        return new PublicChat();
    }

    parsePublicChat(genericObject) {
        return new PublicChat(genericObject);
    }

    getPrivateChat(...participants) {
        let chat = new PrivateChat();
        chat.setParticipants(participants);
        return chat;
    }

    parsePrivateChat(genericObject) {
        return new PrivateChat(genericObject);
    }
}
export default ChatFactory;