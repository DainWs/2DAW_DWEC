class ClientManager {
    constructor() {
        this.chats = [];
        this.clients = [];
    }

    addClient(client) {
        console.log("added");
        let newId = this.clients.push(client);
        client.id = newId;
    }

    getClientsData() {
        let result = [];
        for (let client of this.clients) {
            result.push(client.getData());
        }
        console.log(result);
        return result;
    }

    removeClient(id) {
        console.log("removed");
        this.clients.splice(id, 1);
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

    addMessageToChat(chat, message) {

    }
}

const clientManager = new ClientManager();

class Client {
    constructor(socket) {
        this.socket = socket;
        this.addListeners();
    }

    getData() {
        return this.user;
    }

    addListeners() {
        this.socket.on('userDataReceived', (data) => { this.onUserDataReceived(data) });
        this.socket.on('connectToChat', (data) => { this.onConnectToChat(data) });
        this.socket.on('disconectFromChat', (data) => { this.onDisconectFromChat(data) });
    }

    requestData() {
        this.socket.emit('requestData');
    }

    onUserDataReceived(data) {
        this.user = data;
        this.socket.emit('usersConnectedReceived', clientManager.getClientsData());
        this.socket.broadcast.emit('userListChanged', this.user);
    }

    onConnectToChat(data) {
        clientManager.clientSubscribeToChat(this, data);
    }

    onDisconectFromChat(data) {
        clientManager.clientSubscribeToChat(this, data);
    }
}

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/client/build'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

io.on('connection', onConnect);

server.listen(3000, () => {
  console.log('listening on *:3000');
});

function onConnect(socket) {
    var client = new Client(socket);
    client.requestData();
    clientManager.addClient(client);

    socket.on('disconnect', () => {
      clientManager.removeClient(client.id);
      socket.broadcast.emit('userListChanged', 'update');
    });
}