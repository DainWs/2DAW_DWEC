import PublicChat from "../../models/chats/PublicChat";
import OAuthService from "../LocalOAuthService";
import { ChatProvider } from "../providers/ChatProvider";
import { UserProvider } from "../providers/UsersProvider";

function getChatWhereID(chatId) {
    let chats = ChatProvider.provide();
    return chats.get(chatId);
}

function getPublicChats() {
    let chats = ChatProvider.provide();
    return new Map(Array.from(chats).filter( (chat) => chat[1] instanceof PublicChat ));
}

function getChat(searchedChat) {
    let chat = getChatWhereID(searchedChat.getId());
    if (chat == undefined && searchedChat.participants != undefined) {
        chat = getChatWhereParticipantsAre(searchedChat.getParticipants());
    }
    return chat;
}

function getChatWhereParticipantsAre(participants) {
    console.log("Participants");
    console.log(participants);
    let chats = ChatProvider.provide();
    return Array.from(chats.values()).find( (chat) => chat.belongsTo(participants) );
}

function getChatIdWhereParticipantsAre(participants) {
    console.log("Participants");
    console.log(participants);
    return (getChatWhereParticipantsAre(participants)).getId();
}

function getUsersOfChat(chat, includeLoggedUser = true) {
    let result = [];
    let loggedUser = OAuthService.getLoggedUser();
    let users = UserProvider.provide();
    if (chat instanceof PublicChat) {
        result = users.values();
    } else {
        result = Array.from(users.values()).filter( user => {
            return (includeLoggedUser) 
                ? chat.hasParticipant(user.getId()) 
                : chat.hasParticipant(user.getId()) && user.getId() != loggedUser.getId()
        });
    }
    return result;
}

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
    let users = UserProvider.provide();
    return Array.from(users.values()).find((user) => user.getId() == message.getUserUid());
}

export { getChat, getChatWhereID, getPublicChats, getChatWhereParticipantsAre, getChatIdWhereParticipantsAre, getUsersOfChat, getChatWithUsers, getUsersOfMessage};