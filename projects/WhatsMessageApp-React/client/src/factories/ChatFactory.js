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
        chat.setParticipants(sortParticipants(participants));
        return chat;
    }

    parsePrivateChat(genericObject) {
        return new PrivateChat(genericObject);
    }
}
export default ChatFactory;

function sortParticipants(participants) {
    return participants.sort((p1, p2) => { 
        let result = 0 ;
        if (p1 < p2) {
            result = -1;
        } else if (p1 > p2) {
            result = 1;
        }
        return result;
    });
}

export { sortParticipants };