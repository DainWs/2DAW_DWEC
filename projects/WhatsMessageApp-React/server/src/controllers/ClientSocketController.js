const chatsManager = require('../domain/ChatManager');
const ChatsManager = require('../domain/ChatManager');
const clientManager = require('../domain/ClientManager');
const chatsObserver = require('../domain/observers/ChatsObserver');
const ChatController = require('./ChatController');

class ClientSocketController {
    constructor(socket) {
        this.socket = socket;

        this.socket.on('setUser', (data) => { this.setUser(data) });
        this.socket.on('getUsers', (data) => { this.getUsers(data) });
        this.socket.on('getChat', (data) => { this.getChat(data) });
        this.socket.on('sendMessage', (data) => { this.sendMessage(data) });
        this.socket.on('disconnect', () => { this.disconect() });
    }

    /** Thowing events methods **/
    emit(event, data) {
        this.socket.emit(event, data);
    }

    broadcast(event, data) {
        this.socket.broadcast.emit(event, data);
    }

    /** Listening events methods **/
    setUser(user) {
        console.log('setUser');
        console.log(user);
        if (user != null) {
            this.id = user.uid;
            this.user = user;
            console.log(this.uid);
            clientManager.registre(this);
            this.broadcast('updateUsers', clientManager.getClients());
        }
    }

    getUsers(data = null) {
        console.log('getUsers');
        console.log(clientManager.getClients());
        this.emit('updateUsers', clientManager.getClients());
    }

    getChat(chatIdParts) {
        console.log('getChat');
        console.log(chatIdParts);
        let chat = ChatsManager.search(chatIdParts);
        if (chat != null) {
            chatsObserver.subscribe(this, chat.id);
        } else {
            ChatsManager.registre()
        }
        this.emit('updateChat', chat);
        if (chat != null) {
            this.chatId = chat.id;
            chatsObserver.subscribe(this, chat.id);
        }
        this.updateChat();
    }

    sendMessage(data) {
        console.log('sendMessage');
        console.log(data);
        let chat = data.chat;
        let message = data.message;
        
        let chatController = new ChatController();
        chatController.sendMessage(chat, message);
    }
    
    // Disconect
    disconect() {
        clientManager.unregistre(this);
        this.broadcast('updateUsers', clientManager.getClients());
    }
}
module.exports = ClientSocketController;