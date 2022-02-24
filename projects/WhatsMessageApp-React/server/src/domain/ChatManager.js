class ChatsManager {
    constructor() {
        this.chats = [];
    }

    registre(chat) {
        this.chats[chat.id] = chat;
    }

    unregistre(chat) {
        this.chats.splice(chat.id, 1);
    }

    search(idParts) {
        let result = null;
        let filteredChats = this.chats.filter(
            (_, chatid) => {
                console.log(idParts);
                console.log(idParts.values());
                let result = true;
                for (const idPart of idParts) {
                    result &= chatid.includes(idPart);
                }
                return result;
            });
        
        console.log(filteredChats);
        if (count(filteredChats) > 0) {
            result = filteredChats.pop();
        }
        return result;
    }

    getChat(chatId) {
        return this.chats[chatId];
    }

    getChats() {
        return this.chats;
    }
}

const chatsManager = new ChatsManager();
module.exports = chatsManager;