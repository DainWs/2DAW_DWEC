import PublicChat from "../../models/chats/PublicChat";
import { ChatProvider } from "../providers/ChatProvider";
import { UserProvider } from "../providers/UsersProvider";

function getChatWhereID(chatId) {
    let chats = ChatProvider.provide();
    return chats.get(chatId);
}

function getChatWhereParticipantsAre(...participants) {
    console.log("Participants");
    console.log(participants);
    var searchedChat = null;
    let chats = ChatProvider.provide();
    chats.forEach((chat) => {
        if (chat.belongsTo(participants)) {
            searchedChat = chat;
        }
    });
    return searchedChat;
}

function getUsersOfChat(chatId) {
    let chats = ChatProvider.provide();
    var chat = chats.get(chatId);
    
    let result = [];
    let users = UserProvider.provide();
    if (chat instanceof PublicChat) {
        result = Array.from(users);
    } else {
        users.forEach((user) => {
            if (chat.belongsTo(user.getId())) {
                result.push(user);
            }
        });
    }
    
    return result;
}

export { getChatWhereID, getChatWhereParticipantsAre, getUsersOfChat };