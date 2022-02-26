import React from 'react';
import ChatFactory from '../../../factories/ChatFactory';
import OAuthService from '../../../services/LocalOAuthService';
import { getChatWhereParticipantsAre } from '../../../services/query/Queries';
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
        let chat = getChatWhereParticipantsAre([instance.state.user.getId(), loggedUser.getId()]);
        if (chat == null) {
            chat = new ChatFactory().getPrivateChat(instance.state.user.getId(), loggedUser.getId())
            SocketController.setChat(chat);
        }
        console.log(chat);
        instance.props.showChat({chat: chat, title: instance.state.user.getName()});
    }

    render() {
        return (
            <a className="list-group-item list-group-item-action border-0" onClick={() => { this.showChat(this) }}>
                {this.getPendingView()}
                <div className="d-flex align-items-start">
                    <img src={this.getImageView()} class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                    <div className="flex-grow-1 ml-3">
                        {this.state.user.getName()}
                        {this.getState()}
                    </div>
                </div>
            </a>
        );
    }

    getImageView() {
        let imageId = this.state.user.getImageId();
        if (imageId == undefined || imageId == null) {
            imageId = 1;
        }
        return `https://bootdey.com/img/Content/avatar/avatar${imageId}.png`;
    }

    getPendingView() {
        return (this.state.user.getPendingMessages() > 0) 
            ? (<div className="badge bg-success float-right">{this.state.user.getPendingMessages()}</div>) 
            : (<></>);
    }

    getState() {
        console.log(this.state.user.getState());
        return (this.state.user.getState() == 2)
            ? <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
            : <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>;
    }
}
//<div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
export default PrivateChatModel;