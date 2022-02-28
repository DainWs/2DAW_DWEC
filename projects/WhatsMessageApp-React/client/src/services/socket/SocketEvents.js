/** Listened events **/
const Connect = 'connect';
const updateUsers = 'updateUsers';
const updateChat = 'updateChat';

export { Connect, updateUsers, updateChat };

const LISTEN_EVENTS = [
    Connect,
    updateUsers,
    updateChat
];

export { LISTEN_EVENTS };

/** Throwed Events **/
const connectChat = 'connectChat';
const disconnectChat = 'disconnectChat';
const setUser = 'setUser';
const removeUser = 'removeUser';
const getUsers = 'getUsers';
const setChat = 'setChat';
const getChats = 'getChats';
const writingMessage = 'writingMessage';
const sendMessage = 'sendMessage';

export { connectChat, disconnectChat, setUser, removeUser, getUsers, setChat, getChats, writingMessage, sendMessage };

const THROWED_EVENTS = [
    connectChat,
    disconnectChat,
    setUser,
    getUsers,
    setChat,
    getChats,
    writingMessage,
    sendMessage
];

export { THROWED_EVENTS };