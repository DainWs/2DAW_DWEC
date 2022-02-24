import OAuthService from "../LocalOAuthService";

class SocketDataManager {
    constructor() {
        this.eventsLastestData = [];
    }

    setData(eventListName, data) {
        console.log(data);
        this.eventsLastestData[eventListName] = data;
    }

    getData(eventListName) {
        console.log(this.eventsLastestData[eventListName]);
        return this.eventsLastestData[eventListName];
    }
}
export const socketDataManager = new SocketDataManager();