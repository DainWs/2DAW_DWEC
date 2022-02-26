import UserFactory from "../factories/UserFactory";
import { localStorageService } from "./LocalStorageService";
import { SocketController } from "./socket/SocketController";

class LocalOAuthService {
    constructor() {
        this.loggedUser = localStorageService.loadUser();
    }

    loginWith(credentials) {
        if (this.loggedUser == null) {
            
            this.loggedUser = new UserFactory().parseJSONUser(credentials);
            SocketController.setUser();
            
            localStorageService.saveUser(this.loggedUser);
        }
        return (this.loggedUser != null);
    }

    logout() {
        SocketController.removeUser();
        localStorageService.deleteUser();
        this.loggedUser = null;
    }

    getLoggedUser() {
        return this.loggedUser;
    }

    getLoggedUserId() {
        return this.loggedUser.getId();
    }
}
const OAuthService = new LocalOAuthService();
export default OAuthService;