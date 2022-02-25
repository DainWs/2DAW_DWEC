import UserFactory from "../../factories/UserFactory";
import User from "../../models/User";
import OAuthService from "../LocalOAuthService";
import DataProviderBase from "./DataProviderBase";

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
}
const instance = new UserProvider();
export { instance as UserProvider };