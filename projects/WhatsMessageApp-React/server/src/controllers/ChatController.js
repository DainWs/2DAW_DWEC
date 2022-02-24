const chatsManager = require("../domain/ChatManager");
const chatsObserver = require("../domain/observers/ChatsObserver");

class ChatController {
    sendMessage(chat, message) {
        let realtimeChat = chatsManager.getChat(chat.id);
        console.log(realtimeChat);
        realtimeChat.addMessage(message);
        console.log(chatsManager.getChat(chat.id));
        chatsObserver.notify('updateChat', realtimeChat);
    }
}
module.exports = ChatController;