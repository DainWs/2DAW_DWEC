import UserFactory from "../factories/UserFactory";
import { localStorageService } from "./LocalStorageService";

class LocalOAuthService {
    constructor() {
        this.loggedUser = localStorageService.loadUser();
    }

    loginWith(credentials, remember = false) {
        if (this.loggedUser == null) {
            
            //TODO Express connection here
            this.loggedUser = new UserFactory().makeUser(credentials);
            
            if (remember) {
                localStorageService.saveUser(this.loggedUser);
            }
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