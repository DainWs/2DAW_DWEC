import { io } from "socket.io-client";
import OAuthService from "../LocalOAuthService";
import { DataProviderManager } from "../providers/DataProviderManager";
import SocketDataProviderContext from "./SocketDataProviderContext";
import { Connect, getChat, getUsers, sendMessage, setUser, updateChat, updateUsers } from "./SocketEvents";
import { SocketObserver } from "./SocketObserver";

var socket = io();

class SocketController {
    constructor() {}
    
    /** Listened events methods **/
    onConnect() {
        let user = OAuthService.getLoggedUser();
        console.log(user);
        socket.emit(setUser, user);
        SocketObserver.notify(Connect);
    }

    updateUsers(data) {
        console.log('Update Users event handled.');
        console.log(data);

        if (data) {
            console.log("Passed");
            let context = new SocketDataProviderContext();   
            context.setProviderClass(updateUsers);
            context.setData(data);

            DataProviderManager.manage(context);
            SocketObserver.notify(updateUsers);
        }
    }

    updateChat(data) {
        console.log('Update Chat event handled.');
        console.log(data);
        
        if (data) {
            console.log("Passed");

            let context = new SocketDataProviderContext();   
            context.setProviderClass(updateChat);
            context.setData(data);

            DataProviderManager.manage(context);
            SocketObserver.notify(updateChat);
        }
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
const instance = new SocketController();
export { instance as SocketController };

socket.on(Connect, instance.onConnect);
socket.on(updateUsers, instance.updateUsers);
socket.on(updateChat, instance.updateChat);