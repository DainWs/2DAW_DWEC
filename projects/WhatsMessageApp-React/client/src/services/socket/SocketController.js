import { io } from "socket.io-client";
import OAuthService from "../LocalOAuthService";
import { socketDataManager } from "./SocketDataManager";
import { Connect, getChat, getUsers, sendMessage, setUser, updateChat, updateUsers } from "./SocketEvents";
import { socketObserver } from "./SocketObserver";

var socket = io();

class SocketController {
    constructor() {}
    
    /** Listened events methods **/
    onConnect() {
        let user = OAuthService.getLoggedUser();
        console.log(user);
        socket.emit(setUser, user);
        socketObserver.notify(Connect);
    }

    updateUsers(data) {
        console.log('recivido');
        console.log(data);

        if (data == null) {
            data = [];
        }

        let loggedUser = OAuthService.getLoggedUser();
        var distintList = new Set();
        distintList.add(loggedUser.getUid());
        
        const filteredArr = data.filter(object => {
            let result = !(distintList.has(object.uid))
            distintList.add(object.uid);
            return result && loggedUser.getUid();
        });

        console.log(distintList);
        console.log(filteredArr);

        socketDataManager.setData(updateUsers, Array.from(filteredArr));
        socketObserver.notify(updateUsers);
    }

    updateChat(data) {
        console.log('recivido');
        console.log(data);
        
        if (data == null) {
            data = {id: [], messages: []};
        }

        socketDataManager.setData(updateChat, data);
        socketObserver.notify(updateChat);
    }

    /** Throwed events methods **/
    setUser() {
        let user = OAuthService.getLoggedUser();
        socket.emit(setUser, user);
    }

    getUsers() {
        socket.emit(getUsers);
    }

    getChat(chatIdParts = []) {
        socket.emit(getChat, chatIdParts);
    }

    sendMessage(chat, message) {
        socket.emit(sendMessage, {chat: chat, message: message});
    }
}
export const socketController = new SocketController();

socket.on(Connect, socketController.onConnect);
socket.on(updateUsers, socketController.updateUsers);
socket.on(updateChat, socketController.updateChat);