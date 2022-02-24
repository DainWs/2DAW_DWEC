class ChatsObserver {
    constructor() {
        this.subscriptions = [];
    }

    subscribe(controller, chatId) {
        if (this.subscriptions[chatId] == undefined) {
            this.subscriptions[chatId] = [];
        }

        this.subscriptions[chatId][controller.id] = controller;
    }

    unsubscribe(controller, chatId) {
        this.subscriptions[chatId]
            .splice(controller.id, 1);
    }

    notify(event, chat) {
        this.subscriptions[chat.id]
            .forEach( (controller) => { controller.emit(event, chat); } );
    }
}
const chatsObserver = new ChatsObserver();
module.exports = chatsObserver;