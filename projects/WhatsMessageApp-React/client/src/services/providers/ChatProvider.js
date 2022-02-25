import ChatFactory from "../../factories/ChatFactory";
import Chat from "../../models/chats/Chat";
import DataProviderBase from "./DataProviderBase";

class ChatProvider extends DataProviderBase {
    processDataSupplied() {
        var newProcessedData = new Map();
        console.log('processing data');
        console.log(this.data);
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
        
        console.log('processed data');
        console.log(newProcessedData);
        this.processedData = newProcessedData;
    }
}
const instance = new ChatProvider();
export { instance as ChatProvider };