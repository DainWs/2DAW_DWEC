import React from 'react';
import ChatFactory from '../../factories/ChatFactory';
import Chat from '../../models/chats/Chat';
import Message from '../../models/Message';
import OAuthService from '../../services/LocalOAuthService';
import { ChatProvider } from '../../services/providers/ChatProvider';
import { getChatWhereParticipantsAre } from '../../services/query/Queries';
import { SocketController } from '../../services/socket/SocketController';
import { updateChat } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
import MessageModel from './models/MessageModel';

class ChatView extends React.Component {
    constructor(properties) {
        super();
        this.isComponentMounted = false;

        this.myUser = OAuthService.getLoggedUser();
        this.heUser = properties.user;
        this.chat = new ChatFactory().getPrivateChat(this.myUser, this.heUser);
        this.state = {
            newMessage: "",
            messages: this.chat.getMessages(),
            isDragingOver: false,
            document: null
        };
        this.update();
    }

    update() {
        let newChat = getChatWhereParticipantsAre(this.myUser.getId(), this.heUser.getId());
        if (newChat == null) {
            newChat = new ChatFactory().getPrivateChat(this.myUser.getId(), this.heUser.getId());
        }
        console.log(newChat);
        console.log(this.chat);
        if (this.chat.equals(newChat)) {
            this.chat = newChat;
            console.log(this.chat);
            let procesedMessages = [];
            for (var message of this.chat.getMessages()) {
                let isMine = (message.getUserUid() == this.myUser.getId());
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
        messageObj.setUserUid(this.myUser.getId());
        messageObj.setMessage(this.state.newMessage);
        messageObj.setAttachment(this.state.document);
        SocketController.sendMessage(this.chat, messageObj);
        this.setState({ 
            newMessage: '',
            document: null
        });
    }

    onDragEnter(e) {
        e.preventDefault();
        this.setState({
            isDragingOver: true
        });
    }

    onDragLeave(e) {
        e.preventDefault();
        this.setState({
            isDragingOver: false
        });
    }

    onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        console.log(files);
        var reader = new FileReader();
        var url = reader.readAsDataURL(files[0]);

        reader.onloadend = function (e) {
            this.setState({
                document: [reader.result],
                isDragingOver: false
            });
        }.bind(this);
        console.log(url);
    }

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        SocketObserver.subscribe(updateChat, 'ChatView', function() {instance.update()});
        SocketController.getChat(this.chat.getId());
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        SocketObserver.unsubscribe(updateChat, 'ChatView');
    }

    render() {
        let dragingOverClases = (this.state.isDragingOver) ? 'drop-zone flex-column justify-content-center align-items-center drog-active' : 'drop-zone flex-column justify-content-center align-items-center';
        let document = <></>;
        if (this.state.document != null) {
            if ((this.state.document[0].includes("data:image"))) {
                document = this.getImageView();
            } else {
                document = this.getDocumentView();
            }
            console.log(this.state.document);
        }
        return (
            <>
                <div className="py-2 px-4 border-bottom d-none d-lg-block" style={{backgroundColor: "#f0f2f5"}}>
                    <div className="d-flex align-items-center py-1">
                        <div className="position-relative">
                            <div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
                        </div>
                        <div className="flex-grow-1 pl-3">
                            <strong>{this.heUser.getName()}</strong>
                        </div>
                    </div>
                </div>

                <div className="position-relative flex-grow-1 drop-container drop-message" onDragEnter={(e) => {this.onDragEnter(e)}}>
                    {document}
                    <div className={dragingOverClases} onDragOver={(e) => e.preventDefault()} onDragLeave={(e) => {this.onDragLeave(e)}} onDrop={(e) => {this.onDrop(e);}}>
                        <i class="fa fa-solid fa-upload"></i>
                        <h1>Upload File</h1>
                        <p>Drag & Drop files here or click to upload</p>
                    </div>
                    <div className="chat-messages p-4">
                        {this.state.messages}
                    </div>
                </div>

                <div className="flex-grow-0 py-3 px-4 border-top" style={{backgroundColor: "#f0f2f5"}}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type your message" value={this.state.newMessage} onChange={(event) => {this.onNewMessageChange(event)}}/>
                        <button className="btn btn-primary" onClick={() => {this.sendMessage()}}>Send</button>
                    </div>
                </div>
            </>
        );
    }

    getImageView() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100" style={{background: "#ffffff9c", position: "absolute"}}>
                <img src={this.state.document} style={{maxWidth: "90%", maxHeight: "90%"}}/>
            </div>
        );
    }

    getDocumentView() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100" style={{background: "#ffffff9c", position: "absolute"}}>
                <i class="fa fa-solid fa-file" style={{fontSize: "8rem"}}></i>
            </div>
        );
    }
}
export { ChatView }