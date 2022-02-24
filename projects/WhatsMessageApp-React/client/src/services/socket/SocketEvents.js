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
const getUsers = 'getUsers';
const getChat = 'getChat';
const sendMessage = 'sendMessage';

export { setUser, getUsers, getChat, sendMessage };

const THROWED_EVENTS = [
    setUser,
    getUsers,
    getChat,
    sendMessage
];

export { THROWED_EVENTS };