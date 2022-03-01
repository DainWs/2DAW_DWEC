import React from 'react';
import ChatFactory from '../../../factories/ChatFactory';
import OAuthService from '../../../services/LocalOAuthService';
import { ChatProvider } from '../../../services/providers/ChatProvider';
import { UserProvider } from '../../../services/providers/UserProvider';
import { SocketController } from '../../../services/socket/SocketController';

class PrivateChatModel extends React.Component {
    constructor(properties) {
        super();
        this.state = { 
            user: properties.user,
        };
    }

    showChat(instance) {
        let loggedUser = OAuthService.getLoggedUser();
        let chat = ChatProvider.provideChatWhereParticipantsAre([instance.state.user.getId(), loggedUser.getId()]);
        if (chat == null) {
            chat = new ChatFactory().getPrivateChat(instance.state.user.getId(), loggedUser.getId())
            SocketController.setChat(chat);
        }
        let chats = ChatProvider.provide();
        ChatProvider.supply(chats);
        instance.props.showChat(chat);
    }

    render() {
        let user = UserProvider.provideUser(this.state.user.getId());
        return (
            <a className="list-group-item list-group-item-action border-0 chat__item" onClick={() => { this.showChat(this) }}>
                {this.getPendingView(user)}
                <div className="d-flex align-items-start">
                    <img src={this.getImageView(user)} class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                    <div className="flex-grow-1 ml-3">
                        {user.getName()}
                        {this.getState(user)}
                    </div>
                </div>
            </a>
        );
    }

    getImageView(user) {
        let imageId = user.getImageId();
        if (imageId == undefined || imageId == null) {
            imageId = 1;
        }
        return `https://bootdey.com/img/Content/avatar/avatar${imageId}.png`;
    }

    getPendingView(user) {
        return (user.getPendingMessages() > 0) 
            ? (<div className="badge bg-success float-right">{user.getPendingMessages()}</div>) 
            : (<></>);
    }

    getState(user) {
        return (user.getState() == 2)
            ? <div className="small"><span className="fas fa-circle chat__item--online"></span> Online</div>
            : <div className="small"><span className="fas fa-circle chat__item--offline"></span> Offline</div>;
    }
}
export default PrivateChatModel;