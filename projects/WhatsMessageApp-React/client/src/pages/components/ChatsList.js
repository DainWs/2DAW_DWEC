import React from 'react';
import OAuthService from '../../services/LocalOAuthService';
import { ChatProvider } from '../../services/providers/ChatProvider';
import { UserProvider } from '../../services/providers/UserProvider';
import { SocketController } from '../../services/socket/SocketController';
import { updateUsers, updateChat } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
import PrivateChatModel from './models/PrivateChatModel';
import PublicChatModel from './models/PublicChatModel';

class ChatsList extends React.Component {
    constructor() {
        super();
        this.state = { filtre: '' };
    }

    showChat(chat) {
        ChatProvider.supplyCurrentChat(chat);
        SocketObserver.notify(updateChat);
    }

    onFiltreChange(event) {
        this.setState({
            filtre: event.target.value
        });
    }

    componentDidMount() {
        SocketObserver.subscribe(updateUsers, 'ChatsList', this.forceUpdate.bind(this));
    }

    componentWillUnmount() {
        SocketObserver.unsubscribe(updateUsers, 'ChatsList');
    }

    render() {
        return (
            <div className="p-0 col-12 col-lg-5 col-xl-3 bg-light border-right">
                {this.getLoggedUserView()}
                <div className="px-4 d-none d-md-block">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                            <input type="text" 
                                className="form-control my-1" 
                                placeholder="Search..." 
                                value={this.state.filtre} 
                                onChange={this.onFiltreChange.bind(this)}/>
                        </div>
                    </div>
                </div>
                {this.getProcessedList()}
            </div>
        );
    }

    getLoggedUserView() {
        let loggedUser = OAuthService.getLoggedUser();
        return (
            <div className="px-4 list-group-item d-flex flex-row justify-content-between">
                <div className="d-flex flex-row align-items-center">
                    <img src={`https://bootdey.com/img/Content/avatar/avatar${loggedUser.getImageId()}.png`} class="rounded-circle mr-1" alt={loggedUser.getName()} width="40" height="40"/>
                    <div className="d-flex flex-column">
                        {loggedUser.getName()}
                        {this.getState(loggedUser)}
                    </div>
                </div>
                <div style={{margin: "auto 0"}}>
                    <div class="dropdown">
                        <a type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-solid fa-gear" style={{color: "black"}}></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" onClick={OAuthService.logout.bind(OAuthService)}>Cerrar Sesi&oacute;n</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    getState(loggedUser) {
        return (loggedUser.getState() == 2)
            ? <div className="small"><span className="fas fa-circle" style={{color: "#00C257"}}></span> Online</div>
            : <div className="small"><span className="fas fa-circle" style={{color: "#C20000"}}></span> Offline</div>;
    }

    getProcessedList() {
        var procesedUsers = [];
        let publicChats = ChatProvider.providePublicChats();
        publicChats.forEach((chat) => {
            if (chat.getName().includes(this.state.filtre)) {
                procesedUsers.push(
                    <PublicChatModel key={chat.getId()} chat={chat} showChat={this.showChat.bind(this)}></PublicChatModel>
                );
            }
        });

        let users = UserProvider.provide();
        users.forEach((user) => {
            if (user.getName().includes(this.state.filtre)) {
                procesedUsers.push(
                    <PrivateChatModel key={user.getId()} user={user} showChat={this.showChat.bind(this)}></PrivateChatModel>
                );
            }
        });
        return procesedUsers;
    }
}

export { ChatsList }