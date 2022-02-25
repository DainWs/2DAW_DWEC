import React from 'react';
import ChatFactory from '../../factories/ChatFactory';
import Chat from '../../models/Chat';
import Message from '../../models/Message';
import OAuthService from '../../services/LocalOAuthService';
import { socketController } from '../../services/socket/SocketController';
import { socketDataManager } from '../../services/socket/SocketDataManager';
import { ChatEvent, updateChat } from '../../services/socket/SocketEvents';
import { socketObserver } from '../../services/socket/SocketObserver';
import MessageModel from './models/MessageModel';

class ChatView extends React.Component {
    constructor(properties) {
        super();
        this.isComponentMounted = false;

        this.myUser = OAuthService.getLoggedUser();
        this.heUser = properties.user;
        this.chat = new ChatFactory().makeNewChat(this.myUser, this.heUser);
        console.log(this.chat);
        this.state = {
            newMessage: "",
            messages: this.chat.getMessages()
        };
        this.update();
    }

    update() {
        console.log(socketDataManager.getData(updateChat));
        let newChat = new Chat(socketDataManager.getData(updateChat));
        console.log(newChat);
        console.log(this.chat);
        if (this.chat.equals(newChat)) {
            this.chat = newChat;
            console.log(this.chat);
            let procesedMessages = [];
            for (var message of this.chat.getMessages()) {
                let isMine = (message.getUserUid() == this.myUser.getUid());
                let ownerOfMessage = (isMine) ? this.myUser : this.heUser;
                procesedMessages.push(
                    <MessageModel key={message.getId()} isMine={isMine} user={ownerOfMessage} message={message.getMessage()}></MessageModel>
                );
            }

            if (this.isComponentMounted) {
                this.setState({ messages: procesedMessages });
            } else {
                this.state = { newMessage: "", messages: procesedMessages };
            }
        }
    }
    
    onNewMessageChange(event) {
        this.setState({
            newMessage: event.target.value
        });
    }

    sendMessage() {
        console.log(this.chat);
        let messageObj = new Message();
        messageObj.setUserUid(this.myUser.getUid());
        messageObj.setMessage(this.state.newMessage);
        socketController.sendMessage(this.chat, messageObj);
        this.setState({ newMessage: '' });
    }

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        socketObserver.subscribe(updateChat, 'ChatView', function() {instance.update()});
        socketController.getChat(this.chat.getId());
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        socketObserver.unsubscribe(updateChat, 'ChatView');
    }

    render() {
        return (
            <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column">
                <div className="py-2 px-4 border-bottom d-none d-lg-block">
                    <div className="d-flex align-items-center py-1">
                        <div className="position-relative">
                            <div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
                        </div>
                        <div className="flex-grow-1 pl-3">
                            <strong>{this.heUser.getName()}</strong>
                        </div>
                    </div>
                </div>

                <div className="position-relative flex-grow-1">
                    <div className="chat-messages p-4">
                        {this.state.messages}
                    </div>
                </div>

                <div className="flex-grow-0 py-3 px-4 border-top">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type your message" value={this.state.newMessage} onChange={(event) => {this.onNewMessageChange(event)}}/>
                        <button className="btn btn-primary" onClick={() => {this.sendMessage()}}>Send</button>
                    </div>
                </div>

            </div>
        );
    }
}
export { ChatView }