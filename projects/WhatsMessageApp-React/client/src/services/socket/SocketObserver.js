import { LISTEN_EVENTS } from "./SocketEvents";

class SocketObserver {
    constructor() {
        this.subscribers = [];
        this.eventsLastestData = [];
        for (const event of LISTEN_EVENTS) {
            this.subscribers[`${event}`] = [];
        }
    }

    subscribe(eventListName, className, callback) {
        console.log(eventListName);
        console.log(typeof(eventListName));
        this.subscribers[''+eventListName][className] = callback;
    }

    unsubscribe(eventListName, className) {
        this.subscribers[''+eventListName].splice(className, 1);
    }

    notify(socketEvent) {
        console.log(socketEvent);
        let list = this.subscribers[`${socketEvent}`];
        for (const key in list) {
            console.log(list[key]);
            list[key]();
        }
    }
}
const instance = new SocketObserver();
export { instance as SocketObserver };
