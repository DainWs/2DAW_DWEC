import UserFactory from "../factories/UserFactory";
import { localStorageService } from "./LocalStorageService";
import { socketController } from "./socket/SocketController";

class LocalOAuthService {
    constructor() {
        this.loggedUser = localStorageService.loadUser();
    }

    loginWith(credentials) {
        if (this.loggedUser == null) {
            
            this.loggedUser = new UserFactory().makeUser(credentials);
            socketController.setUser();
            
            localStorageService.saveUser(this.loggedUser);
        }
        return (this.loggedUser != null);
    }

    logout() {
        localStorageService.deleteUser();
        this.loggedUser = null;
    }

    getLoggedUser() {
        return this.loggedUser;
    }
}
const OAuthService = new LocalOAuthService();
export default OAuthService;