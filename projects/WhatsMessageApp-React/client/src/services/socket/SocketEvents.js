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
const setUser = 'setUser';
const removeUser = 'removeUser';
const getUsers = 'getUsers';
const setChat = 'setChat';
const getChat = 'getChat';
const getChats = 'getChats';
const sendMessage = 'sendMessage';

export { setUser, removeUser, getUsers, setChat, getChat, getChats, sendMessage };

const THROWED_EVENTS = [
    setUser,
    getUsers,
    setChat, 
    getChat, 
    getChats,
    sendMessage
];

export { THROWED_EVENTS };