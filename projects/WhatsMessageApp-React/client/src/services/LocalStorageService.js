import UserFactory from "../factories/UserFactory";

class LocalStorageService {
    saveUser(user) {
        localStorage.setItem('userUid', user.getUid());
        localStorage.setItem('user', JSON.stringify(user));
    }

    deleteUser() {
        localStorage.removeItem('userUid');
        localStorage.removeItem('user');
    }

    loadUser() {
        let userJSON = localStorage.getItem('user');
        return new UserFactory().makeUser(userJSON);
    }

    loadUserUID() {
        return localStorage.getItem('userUID');
    }
}
export const localStorageService = new LocalStorageService();