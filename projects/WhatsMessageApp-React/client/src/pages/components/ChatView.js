import React from 'react';
import ChatFactory from '../../factories/ChatFactory';
import OAuthService from '../../services/LocalOAuthService';
import MessageModel from './models/MessageModel';

class ChatView extends React.Component {
    constructor(properties) {
        super();
        this.isComponentMounted = false;

        this.myUser = OAuthService.getLoggedUser();
        this.heUser = properties.user;
        this.chat = new ChatFactory().makeNewChat(this.myUser, this.heUser);
        
        this.state = {
            newMessage: "",
            messages: this.chat.getMessages()
        };
        this.update();
    }

    update() {
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
    
    onNewMessageChange(event) {
        this.setState({
            newMessage: event.target.value
        });
    }

    sendMessage() {
        this.chat.addMessage(this.myUser.getUid(), this.state.newMessage);
        this.update();
        //TODO send message
    }

    componentDidMount() {
        this.isComponentMounted = true;
        //TODO registre this to a observer
        //dbService.registre(ProductList.name, function () { instance.update() });
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        //TODO unregistre this from a observer
        //dbService.unregistre(ProductList.name);
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