import PublicChat from "../../models/chats/PublicChat";
import ClientMessage from "../../models/messages/ClientMessage";
import ServerMessage from "../../models/messages/ServerMessage";
import OAuthService from "../LocalOAuthService";
import { ChatProvider } from "../providers/ChatProvider";
import { UserProvider } from "../providers/UsersProvider";


function getChatWithUsers() {
    let chats = ChatProvider.provide();
    var result = new Map();
    for (const key in chats) {
        let chat = chats.get(key);
        if (chat.participants == undefined) {
            let relativeData = {};
            relativeData.chat = chat;
            relativeData.isPublic = true;
            result.set(chat.getId(), relativeData);
        } else {
            let relativeData = {};
            relativeData.chat = chat;
            relativeData.isPublic = false;
            let users = getUsersOfChat(chat);
            relativeData.isGroup = (users.length > 1);
            relativeData.users = (relativeData.isGroup) ? users[0] : users ;
            result.set(chat.getId(), relativeData);
        }
    }
    return result;
}

function getUsersOfMessage(message) {
    let result = null;
    if (message instanceof ClientMessage) {
        let users = UserProvider.provide();
        result = Array.from(users.values()).find((user) => user.getId() == message.getUserUid());
    }
    return result;
}

export { getChatWithUsers, getUsersOfMessage};