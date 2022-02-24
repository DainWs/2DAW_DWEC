import { io } from "socket.io-client";
import OAuthService from "../LocalOAuthService";

export const RequestData = 'requestData';
export const UserListChanged = 'userListChanged';
export const UsersConnectedReceived = 'usersConnectedReceived';

class SocketManager {
    constructor() {
        this.subscriptionLists = [];
        this.subscriptionLists[RequestData] = [];
        this.subscriptionLists[UserListChanged] = [];
        this.subscriptionLists[UsersConnectedReceived] = [];
        this.datas = [];
    }

    setData(toList, data) {
        this.datas[toList] = data;
    }

    getData(toList) {
        return this.datas[toList] ?? [];
    }

    notify(toList) {
        console.log(toList);
        let list = this.subscriptionLists[toList];
        console.log(this.subscriptionLists);
        console.log(list);
        console.log(list.values());
        console.log(Array.from(list));
        for (const key in list) {
            console.log(list[key]);
            list[key]();
        }
    }

    subscribe(className, toList, callback) {
        console.log(callback);
        callback();
        this.subscriptionLists[toList][className] = callback;
    }

    unsubscribe(className, toList) {
        this.subscriptionLists[toList].splice(className, 1);
    }
}

export const socketManager = new SocketManager();

var socket = io();
socket.on(RequestData, requestData);
socket.on(UserListChanged, userListChanged);
socket.on(UsersConnectedReceived, usersConnectedReceived);

function requestData(data) {
    console.log(data);
    socket.emit('userDataReceived', OAuthService.getLoggedUser());
    socketManager.notify(RequestData);
}

function usersConnectedReceived(data) {
    console.log(data);
    socketManager.setData(UsersConnectedReceived, data);
    socketManager.notify(UsersConnectedReceived);
}

function userListChanged(data) {
    console.log('recivido');
    console.log(data);
    socket.emit('userDataReceived', OAuthService.getLoggedUser());
    socketManager.notify(UserListChanged);
}