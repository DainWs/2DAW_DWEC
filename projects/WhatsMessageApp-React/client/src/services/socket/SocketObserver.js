import { LISTEN_EVENTS } from "./SocketEvents";

class SocketObserver {
    constructor() {
        this.subscribers = new Map();
        for (const event of LISTEN_EVENTS) {
            this.subscribers.set(`${event}`, new Map());
        }
    }

    subscribe(eventListName, className, callback) {
        this.subscribers.get(`${eventListName}`)
            .set(className, callback);
    }

    unsubscribe(eventListName, className) {
        this.subscribers.get(`${eventListName}`)
            .delete(className);
    }

    notify(eventListName) {
        this.subscribers.get(`${eventListName}`).forEach(callback => {
            console.log(callback);
            callback();
        });
    }
}
const instance = new SocketObserver();
export { instance as SocketObserver };
