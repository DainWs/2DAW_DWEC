const express = require('express');
const fs = require("fs"); 
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/client/build'));

/**
 * Before send the index.html file, we check if it exists, 
 * because if the server is compiling a new version, this file do not exist.
 */
app.get('/', (req, res) => {
    let file = '/index.html';
    if (fs.existsSync(file)) {
        res.sendFile(file);
    } else {
        res.send('<h1>Not found</h1><br/><p>Es posible que el servidor este cargando y compilando la pagina,<br/> vuelva a intentarlo en unos 5-10 segundos aproximados.</p>');   
    }
});

io.on('connection', onConnect);

server.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});

/** 
 * CLIENTS Map is composed by
 * Key: SocketId
 * Value: LastUser
 * 
 * The purpose of this map is to control that if the client
 * has not sent the removeUser() request before disconnecting,
 * we try to disconnect it ourselves.
 */
let CLIENTS = new Map();

/**
 * A simple Map of users composed by
 * Key: userId
 * Value: user
 * 
 * This map is loaded from server localStorage
 */
var USERS_LIST = new Map();

/**
 * A simple Map of chats composed by
 * Key: chatId
 * Value: chat
 * 
 * This map is loaded from server localStorage
 */
var CHAT_LIST = new Map();

// This is the default Global Chat
CHAT_LIST.set(101, { id: 101, name: 'Global Chat', messages: [], writingUsers: [] });

function onConnect(socket) {
    CLIENTS.set(socket.id, {});

    socket.on('disconnect', function() {
        CLIENTS.delete(socket.id);
    });

    socket.on('connectChat', (user) => {
        let chat = CHAT_LIST.get(101);
        let serverMessage = {id: new Date().getTime(), message: null, type: 2};
        serverMessage.message = `${user.name} has connected`;
        chat.messages.push(serverMessage);
        CHAT_LIST.set(101, chat);
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('disconnectChat', (user) => {
        let chat = CHAT_LIST.get(101);
        let serverMessage = {id: new Date().getTime(), message: null, type: 1};
        serverMessage.message = `${user.name} has disconnected`;
        chat.messages.push(serverMessage);
        CHAT_LIST.set(101, chat);
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('setUser', (user) => {
        console.log('setUser');

        if (user != null) {
            let oldUser = Array.from(USERS_LIST.values()).find((tmpUser) => tmpUser.name == user.name );
            if (oldUser === undefined) {
                USERS_LIST.set(user.id, user);    
            } else {
                user.id = oldUser.id;
                USERS_LIST.set(user.id, user);
            }
            io.emit('updateUsers', getFormatedMap(USERS_LIST));
        }
    });

    socket.on('removeUser', (user) => {
        user.state = 1;
        USERS_LIST.set(user.id, user);
        io.emit('updateUsers', getFormatedMap(USERS_LIST));
    });
    
    socket.on('getUsers', () => {
        console.log('getUsers');
        socket.emit('updateUsers', getFormatedMap(USERS_LIST));
    });

    socket.on('setChat', (chatData) => {
        console.log('setChat');
        let chat = findChat(chatData);
        if (chat === null) {
            CHAT_LIST.set(chatData.id, chatData);
        }
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('getChats', () => {
        console.log('getChats');
        io.emit('updateChat', getFormatedMap(CHAT_LIST));
    });

    socket.on('writingMessage', (data) => {
        console.log('writingMessage');
        let chat = findChat(data.chat);

        if (chat !== null) {
            if (data.hasStarted) {
                let founded = chat.writingUsers.find((writingUser) => writingUser.id === data.user.id);
                if (founded === undefined) {
                    chat.writingUsers.push({id: data.user.id, name: data.user.name});
                    CHAT_LIST.set(chat.id, chat);
                    io.emit('updateChat', getFormatedMap(CHAT_LIST));
                }
            } else {
                let foundedIndex = chat.writingUsers.findIndex((writingUser) => writingUser.id === data.user.id);
                if (foundedIndex !== undefined) {
                    chat.writingUsers.splice(foundedIndex, 1);
                    CHAT_LIST.set(chat.id, chat);
                    io.emit('updateChat', getFormatedMap(CHAT_LIST));
                }
            }
        }
    });

    socket.on('sendMessage', (data) => {
        console.log('sendMessage');
        let chat = findChat(data.chat);

        if (chat !== null) {
            let message = data.message;

            if (chat.messages === undefined || chat.messages === null) {
                chat.messages = [];
            }

            chat.messages.push(message);

            if (chat.writingUsers != undefined) {
                let index = chat.writingUsers.findIndex((writingUser) => writingUser.id === message.userUid);
                chat.writingUsers.splice(index, 1);
            }
            
            CHAT_LIST.set(chat.id, chat);
            io.emit('updateChat', getFormatedMap(CHAT_LIST));
        }
    });
}

/** Utils functions **/

function getFormatedMap(map) {
    return Array.from(map.values());
}

function findChat(chat) {
    let findedChat = null;
    if (CHAT_LIST.has(chat.id)) {
        findedChat = CHAT_LIST.get(chat.id);
    } else if (chat.participants !== undefined) {
        findedChat = findChatByParticipants(chat.participants);
    }
    return (findedChat === undefined) ? null : findedChat;
}

function findChatByParticipants(participants) {
    return Array
        .from(CHAT_LIST.values())
        .find( 
            (chat) => participantsAreEquals(chat.participants, participants)
        );
}

function participantsAreEquals(participantsOne, participantsTwo) {
    let result = JSON.stringify(participantsOne) === JSON.stringify(participantsTwo);
    return result;
}