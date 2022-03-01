import ChatFactory from "../../factories/ChatFactory";
import Chat from "../../models/chats/Chat";
import PublicChat from "../../models/chats/PublicChat";
import { SocketController } from '../../services/socket/SocketController';
import DataProviderBase from "./DataProviderBase";

class ChatProvider extends DataProviderBase {
    constructor() {
        super();
        this.currentChat = null;
    }

    processDataSupplied() {
        var newProcessedData = new Map();
        if (Array.isArray(this.data)) {
            this.data.forEach((chatData) => {
                let chat = chatData;
                if (!(chat instanceof Chat)) {
                    chat = new ChatFactory().parseChat(chat);
                }

                let isRepited = newProcessedData.has(chat.getId());
                if (!isRepited) {
                    newProcessedData.set(chat.getId(), chat);
                }
            });
        }
        this.processedData = newProcessedData;
    }

    supplyCurrentChat(chat) {
        if (chat instanceof PublicChat) {
            SocketController.connectChat();
        } else if (this.currentChat instanceof PublicChat) {
            SocketController.disconnectChat();
        }
        this.currentChat = chat;
    }

    provideCurrentChat() {
        return (this.currentChat === null)
            ? null
            : this.provideChat(this.currentChat);
    }

    provideChat(searchedChat) {
        let chat = this.provideChatWhereID(searchedChat.getId());
        if (chat == undefined && searchedChat.participants != undefined) {
            chat = this.provideChatWhereParticipantsAre(searchedChat.getParticipants());
        }
        if (chat == undefined) {
            chat = searchedChat;
        }
        return chat;
    }

    provideChatWhereID(chatId) {
        return this.processedData.get(chatId);
    }

    provideChatWhereParticipantsAre(participants) {
        return Array
            .from(this.processedData.values())
            .find( (chat) => chat.belongsTo(participants) );
    }

    providePublicChats() {
        return new Map(
            Array.from(this.processedData)
                .filter( (chat) => chat[1] instanceof PublicChat )
            );
    }
}
const instance = new ChatProvider();
export { instance as ChatProvider };