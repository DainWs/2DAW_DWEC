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

let CLIENTS = new Set();
var USERS_LIST = new Map();
var CHAT_LIST = new Map();
CHAT_LIST.set(101, { id: 101, name: 'Global Chat', messages: [] });

function onConnect(socket) {
    CLIENTS.add(socket.id);

    socket.on('disconnect', function() {
        CLIENTS.delete(socket.id);
    });

    socket.on('setUser', (user) => {
        console.log('setUser');
        console.log(user);

        if (user != null) {
            let oldUser = Array.from(USERS_LIST.values()).find((tmpUser) => tmpUser.name == user.name );
            if (oldUser == undefined) {
                USERS_LIST.set(user.id, user);    
            } else {
                user.id = oldUser.id;
                USERS_LIST.set(user.id, user);
            }
            io.emit('updateUsers', getFormatedMap(USERS_LIST));
        }
        console.log('endsetUser');
    });

    socket.on('removeUser', (user) => {
        user.state = 1;
        USERS_LIST.set(user.id, user);
        io.emit('updateUsers', getFormatedMap(USERS_LIST));
    });
    
    socket.on('getUsers', () => {
        console.log('getUsers');
        console.log(USERS_LIST);
        socket.emit('updateUsers', getFormatedMap(USERS_LIST));
    });

    socket.on('setChat', (chatData) => {
        console.log('setChat');
        console.log(chatData);
        console.log(chatData.id);
        console.log(chatData.participants);
        let chat = findChat(chatData);
        if (chat == null) {
            CHAT_LIST.set(chatData.id, chatData);
        }
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('getChat', (chatData) => {
        console.log('getChat');
        io.emit('updateChat', findChat(chatData));
    });

    socket.on('getChats', () => {
        console.log('getChats');
        console.log(CHAT_LIST);
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('sendMessage', (data) => {
        console.log('sendMessage');
        console.log(data);
        console.log(data.chat);
        let chat = findChat(data.chat);

        console.log(chat);
        if (chat != null) {
            let message = data.message;

            if (chat.messages == undefined || chat.messages == null) {
                chat.messages = [];
            }

            chat.messages.push(message);
            console.log(chat.messages);
            
            CHAT_LIST.set(chat.id, chat);
            console.log(chat);
            console.log(CHAT_LIST);
            console.log(JSON.stringify(chat));
            io.emit('updateChat', getFormatedMap(CHAT_LIST));
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

function getFormatedMap(map) {
    return Array.from(map.values());
}

function getFormatedList(list) {
    var result = [];
    for (const client in list) {
        result.push(list[client]);
    }
    return result;
}

function findChat(chat) {
    let findedChat = null;
    if (CHAT_LIST.has(chat.id)) {
        findedChat = CHAT_LIST.get(chat.id);
    } else if (chat.participants != undefined) {
        findedChat = findChatByParticipants(chat.participants);
    }
    return (findedChat == undefined) ? null : findedChat;
}

function findChatByParticipants(participants) {
    return Array
        .from(CHAT_LIST.values())
        .find( 
            (chat) => participantsAreEquals(chat.participants, participants)
        );
}

function participantsAreEquals(participantsOne, participantsTwo) {
    console.log('participants');
    console.log(participantsOne);
    console.log(participantsTwo);
    let result = JSON.stringify(participantsOne) == JSON.stringify(participantsTwo);
    console.log(result);
    return result;
}