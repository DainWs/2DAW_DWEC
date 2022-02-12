import OrderFactory from "../factories/OrderFactory";
import UserFactory from "../factories/UserFactory";

class LocalStorageService {
    saveUser(user) {
        localStorage.setItem('userUID', user.getUid());
        localStorage.setItem('user', JSON.stringify(user));
    }

    deleteUser() {
        localStorage.removeItem('userUID');
        localStorage.removeItem('user');
    }

    loadUser() {
        let userJSON = localStorage.getItem('user');
        return new UserFactory().getUser(userJSON);
    }

    loadUserUID() {
        return localStorage.getItem('userUID');
    }

    saveOrder(order) {
        localStorage.setItem('order', JSON.stringify(order));
    }

    loadOrder() {
        let userUID = this.loadUserUID();
        let orderJSON = localStorage.getItem('order');
        return new OrderFactory().getOrder(userUID, orderJSON);
    }

    clearOrder() {
        let userUID = this.loadUserUID();
        let order = new OrderFactory().getOrder(userUID);
        localStorage.setItem('order', JSON.stringify(order));
    }
}
export const localStorageService = new LocalStorageService();