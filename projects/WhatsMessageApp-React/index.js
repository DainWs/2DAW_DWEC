const express = require('express');
const fs = require("fs"); 
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/client/build'));


app.get('/', (req, res) => {
    let file = '/index.html';
    if (fs.existsSync('/index.html')) {
        res.sendFile('/index.html');
    } else {
        res.send('<h1>Not found</h1>');   
    }
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

        io.emit('updateChat', getFormatedList(CHAT_LIST));
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

            if (chat.messages == undefined || chat.messages == null) {
                chat.messages = [];
            }

            let newId = chat.messages.push(message);
            console.log(newId);
            console.log(chat.messages);
            chat.messages[newId - 1].id = newId - 1;
            
            CHAT_LIST[chat.id] = chat;
            console.log(chat);
            console.log(JSON.stringify(chat));
            io.emit('updateChat', getFormatedList(CHAT_LIST));
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