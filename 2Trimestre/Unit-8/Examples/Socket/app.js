const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'));

io.on('connection', onConnect);

server.listen(3000, () => {
  console.log('listening on *:3000');
});

var USERS_CONNECTED = 0;
var MESSAGES = [];

function onConnect(socket) {
  USERS_CONNECTED++;
  var username;
  socket.on('onNameReceived', (name) => {
    username = name;
    socket.emit('onMessages', MESSAGES);
    socket.broadcast.emit('onUserConnected', name);
  });

  socket.on('onMessageAvaible', (messageObj) => {
    MESSAGES.push(messageObj);
    socket.broadcast.emit('onMessage', messageObj);
  });

  socket.on('disconnect', () => {
    USERS_CONNECTED--;
    socket.broadcast.emit('onUserDisconnected', username);
  });

  socket.emit('onRequestName');
}