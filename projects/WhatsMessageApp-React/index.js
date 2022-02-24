/*class ChatsManager {
    constructor() {
        this.chats = [];
    }

    registre(chat) {
        this.chats[chat.id] = chat;
    }

    unregistre(chat) {
        this.chats.splice(chat.id, 1);
    }

    search(idParts) {
        let result = null;
        let filteredChats = this.chats.filter(
            (chat, chatid) => {
                console.log(idParts);
                console.log(idParts.values());
                let result = true;
                for (const idPart of idParts) {
                    result &= chatid.includes(idPart);
                }
                return result;
            });
        
        console.log(filteredChats);
        if (count(filteredChats) > 0) {
            result = filteredChats.pop();
        }
        return result;
    }

    getChats() {
        return this.chats;
    }

    get(chatId) {
        return this.chats[chatId];
    }

    sendMessage(chatid, message) {
        message.id = this.chats[chatid].messages.push(message);
        chatsObserver.notify('ChatEvent', this.chats[chatid]);
    }
}
const chatsManager = new ChatsManager();

class ChatsObserver {
    constructor() {
        this.subscriptions = [];
    }

    subscribe(client, chatid) {
        if (this.subscriptions[chatid] == undefined) {
            this.subscriptions[chatid] = [];
        }

        this.subscriptions[chatid][client.id] = client;
    }

    unsubscribe(client, chatid) {
        this.subscriptions[chatid]
            .splice(client.id, 1);
    }

    notify(event, chat) {
        this.subscriptions[chat.id]
            .forEach( (client) => { client.emit(event, chat) } );
    }
}
const chatsObserver = new ChatsObserver();

class ClientObserver {
    constructor() {
        this.chats = [];
        this.clients = [];
    }

    subscribe(client) {
        console.log(`Client log-in: [${client.id}|${client.user.displayName}]`);
        this.clients[client.id] = client;
        this.notifyAll('UserListEvent', this.getSubscribers());
    }

    unsubscribe(id) {
        console.log(`Client log-out: [${id}]`);
        this.clients.splice(id, 1);
        this.notifyAll('UserListEvent', this.getSubscribers());
    }

    notifyAll(event, data) {
        this.clients.forEach( ( client ) => { client.emit(event, data) } );
    }

    notifyOne(clientId, event, data) {
        this.clients[clientId].emit(event, data);
    }

    getSubscribers() {
        let result = [];
        for (let client of this.clients) {
            result[client.id] = client.user;
        }
        return result;
    }

    clientSubscribeToChat(client, chat) {
        let founded = false;
        for (let chatUid in this.chats) {
            console.log(chatUid);
            let firstUserMatch = chatUid.includes(chat.userOneUid);
            let secondUserMatch = chatUid.includes(chat.userTwoUid);
            if (firstUserMatch && secondUserMatch) {
                this.chats[chatUid].subscribers[client.id] = client;
                founded = true;
            }
        }

        if (!founded) {
            this.chats[chat.id] = chat;
            this.chats[chat.id].subscribers[client.id] = client;
        }
    }

    clientUnsubscribeFromChat(client, chat) {
        for (let chatUid in this.chats) {
            console.log(chatUid);
            let firstUserMatch = chatUid.includes(chat.userOneUid);
            let secondUserMatch = chatUid.includes(chat.userTwoUid);
            if (firstUserMatch && secondUserMatch) {
                this.chats[chatUid].subscribers.splice(client.id, 1);
            }
        }
    }
}

const clientObserver = new ClientObserver();


class ClientManager {
    constructor() {
        this.clients = [];
    }

    registre(client) {
        console.log(`Client log-in: [${client.id}|${client.user.displayName}]`);
        this.clients[client.id] = client;
        io.emit('UserListEvent', this.getClients());
    }

    unregistre(id) {
        console.log(`Client log-out: [${id}]`);
        this.clients.splice(id, 1);
        io.emit('UserListEvent', this.getClients());
    }

    getClient() {

    }

    getClients() {
        let result = [];
        for (let client of this.clients) {
            result[client.id] = client.user;
        }
        return result;
    }

    clientSubscribeToChat(client, chat) {
        let founded = false;
        for (let chatUid in this.chats) {
            console.log(chatUid);
            let firstUserMatch = chatUid.includes(chat.userOneUid);
            let secondUserMatch = chatUid.includes(chat.userTwoUid);
            if (firstUserMatch && secondUserMatch) {
                this.chats[chatUid].subscribers[client.id] = client;
                founded = true;
            }
        }

        if (!founded) {
            this.chats[chat.id] = chat;
            this.chats[chat.id].subscribers[client.id] = client;
        }
    }

    clientUnsubscribeFromChat(client, chat) {
        for (let chatUid in this.chats) {
            console.log(chatUid);
            let firstUserMatch = chatUid.includes(chat.userOneUid);
            let secondUserMatch = chatUid.includes(chat.userTwoUid);
            if (firstUserMatch && secondUserMatch) {
                this.chats[chatUid].subscribers.splice(client.id, 1);
            }
        }
    }
}

class Client {
    constructor(socket) {
        this.socket = socket;
        this.addListeners();
    }

    getData() {
        return this.user;
    }

    addListeners() {
        this.socket.on('UserData', (data) => { this.onUserDataReceived(data) });
        this.socket.on('ConnectToChat', (data) => { this.onConnectToChat(data) });
    }

    emit(event, data) {
        this.socket.emit(event, data);
    }

    updateChat() {
        let chat = chatsManager.get(this.chatId);
        console.log(`update chat: ${chat}`);
        this.socket.emit('ChatEvent', chat);
    }

    onUserDataReceived(data) {
        this.id = data.uid;
        this.user = data;
        console.log(this.id);
        clientObserver.registre(this);
        
        this.socket.broadcast.emit('UserListEvent', this.user);
    }

    onConnectToChat(data) {
        if (this.chatId) {
            chatsObserver.unsubscribe(this, this.chatId);
        }

        let chat = chatsManager.search(data);
        if (chat != null) {
            this.chatId = chat.id;
            chatsObserver.subscribe(this, chat.id);
        }
        this.updateChat();
    }
}
*/
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/client/build'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

io.on('connection', onConnect);

server.listen(3000, () => {
  console.log('listening on *:3000');
});

let allClients = new Set();
var usersList = [];
var CHAT_LIST = [];

function onConnect(socket) {
    allClients.add(socket.id);
    console.log(socket.id);

    socket.on('disconnect', function() {
        console.log(socket.id);

        delete usersList[socket.id];
        allClients.delete(socket.id);
    });

    socket.on('setUser', (user) => {
        console.log('setUser');
        console.log(user);
        if (user != null) {
            usersList[socket.id] = user;
            io.emit('updateUsers', getFormatedList(usersList));
        }
        console.log('endsetUser');
    });
    
    socket.on('getUsers', (data) => {
        console.log('getUsers');
        socket.emit('updateUsers', getFormatedList(usersList));
    });

    socket.on('getChat', (chatIdParts) => {
        console.log('getChat');
        console.log(chatIdParts);
        let chat = CHAT_LIST[chatIdParts];

        this.emit('updateChat', chat);
    });

    socket.on('sendMessage', (data) => {
        console.log('sendMessage');
        console.log(data);
        let chat = data.chat;
        if (CHAT_LIST[data.chat.id] != undefined) {
            chat = CHAT_LIST[data.chat.id];
        }
        console.log(chat);
        if (chat != null) {
            let message = data.message;

            if (chat.messages == undefined) {
                chat.messages = [];
            }

            let newId = chat.messages.push(message);
            console.log(newId);
            console.log(chat.messages);
            chat.messages[newId - 1].id = newId - 1;
            
            CHAT_LIST[chat.id] = chat;
            console.log(chat);
            console.log(JSON.stringify(chat));
            this.emit('updateChat', chat);
        }
    });

    /*
    socket.on('disconnect', () => {
        console.log('disconnect');
        const index = usersList.delete(socket.id);
        console.log(socket.id);
        if (index > -1) {
            usersList.delete();
        }
        io.emit('updateUsers', getFormatedList(usersList));
    });
    */
}

function getFormatedList(list) {
    var result = [];
    for (const client in list) {
        result.push(list[client]);
    }
    return result;
}

/** Listening events methods **/

function sendMessage(data) {
    console.log('sendMessage');
    console.log(data);
    let chat = data.chat;
    let message = data.message;
    
    let chatController = new ChatController();
    chatController.sendMessage(chat, message);
}