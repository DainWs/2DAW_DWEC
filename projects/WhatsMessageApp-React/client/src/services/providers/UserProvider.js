import UserFactory from "../../factories/UserFactory";
import ClientMessage from "../../models/messages/ClientMessage";
import User from "../../models/User";
import OAuthService from "../LocalOAuthService";
import DataProviderBase from "./DataProviderBase";
import PublicChat from "../../models/chats/PublicChat";

class UserProvider extends DataProviderBase {
    processDataSupplied() {
        var newProcessedData = new Map();
        console.log('processing data');
        console.log(this.data);
        if (Array.isArray(this.data)) {
            this.data.forEach((userData) => {
                let user = userData;
                if (!(user instanceof User)) {
                    user = new UserFactory().parseUser(user);
                }

                let isRepited = newProcessedData.has(user.getId());
                if (!isRepited) {
                    newProcessedData.set(user.getId(), user);
                }
            });
        }

        newProcessedData.delete(OAuthService.getLoggedUserId());
        
        console.log('processed data');
        console.log(newProcessedData);
        this.processedData = newProcessedData;
    }

    provideUsersOfMessage(message) {
        let result = null;
        if (message instanceof ClientMessage) {
            result = Array
                .from(this.processedData.values())
                .find((user) => user.getId() == message.getUserUid());
        }
        return result;
    }

    provideUsersOfChat(chat, isLoggedAllowed) {
        console.log(chat);
        let result = null;
        if (chat instanceof PublicChat) {
            result = [];
        } else {
            let loggedUser = OAuthService.getLoggedUser();
            result = Array
                .from(this.processedData.values())
                .filter((user) => {
                    return (isLoggedAllowed)
                        ? chat.hasParticipant(user.id)
                        : chat.hasParticipant(user.id) && user.id != loggedUser.getId();
                });
        }
        return result;
    }
}
const instance = new UserProvider();
export { instance as UserProvider };