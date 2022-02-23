var socket;

var messages;
var inputMessage;
var inputUsername;

var username;

window.onload = () => {
    messages = document.getElementById('messages-list');
    inputMessage = document.getElementById('messageField');
    inputUsername = document.getElementById('usernameField');

    loadUser();

    inputUsername.value = username;

    socket = io();
    socket.on('onUserConnected', onUserConnected);
    socket.on('onUserDisconnected', onUserDisconnected);
    socket.on('onRequestName', onRequestName);
    socket.on('onMessages', addMessages);
    socket.on('onMessage', addMessage);

};

function loadUser() {
    username = localStorage.getItem('username');
    if (!username) { username = `user_${Date.now()}`; }
}

function saveUser() {
    let newUsername = inputUsername.value;
    console.log(newUsername);
    if (newUsername.length != 0) {
        localStorage.setItem('username', newUsername);
        location.reload(true);
    }
}


function onUserConnected(user) {
    let receivedMessage = document.createElement(`p`);
    receivedMessage.style.fontStyle = 'italic';
    receivedMessage.style.backgroundColor = '#F4F5BE';
    receivedMessage.innerText = `El usuario ${user} se ha conectado.`;
    messages.appendChild(receivedMessage);
}

function onUserDisconnected(user) {
    let receivedMessage = document.createElement(`p`);
    receivedMessage.style.fontStyle = 'italic';
    receivedMessage.style.backgroundColor = '#F5C1BE';
    receivedMessage.innerText = `El usuario ${user} se ha desconectado.`;
    messages.appendChild(receivedMessage);
}

function onRequestName() {
    if (username) {
        socket.emit('onNameReceived', username);
    }
}

function addMessages(messages) {
    Array.from(messages).forEach((msg) => addMessage(msg));
}

function addMessage(messageObj) {
    let receivedMessage = document.createElement(`p`);
    let usernameSpan = document.createElement(`u`);
    usernameSpan.innerText = messageObj.user;
    receivedMessage.appendChild(usernameSpan);
    receivedMessage.innerText = messageObj.message;
    messages.appendChild(receivedMessage);
}

function send() {
    socket.emit('onMessageAvaible', {user: username, message: inputMessage.value});
}