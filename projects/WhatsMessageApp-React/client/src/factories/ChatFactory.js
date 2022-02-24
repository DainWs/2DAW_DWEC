import Chat from "../models/Chat";
import OAuthService from "../services/LocalOAuthService";

class ChatFactory {
    makeChat(chatJSON) {
        let genericObject = JSON.parse(chatJSON);
        return (genericObject) ? new Chat(genericObject) : null;
    }

    makeNewChat(userOne, userTwo) {
        let genericObject = {};
        genericObject.id = [ userOne.getUid(), userTwo.getUid() ];
        genericObject.messages = [];
        return new Chat(genericObject);
    }
}
export default ChatFactory;