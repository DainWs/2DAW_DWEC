import React from 'react';
import ChatFactory from '../../factories/ChatFactory';
import Chat from '../../models/chats/Chat';
import Message from '../../models/Message';
import OAuthService from '../../services/LocalOAuthService';
import { getChat } from '../../services/query/Queries';
import { SocketController } from '../../services/socket/SocketController';
import { updateChat } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
import MessageModel from './models/MessageModel';

class ChatView extends React.Component {
    constructor(properties) {
        super();
        this.isComponentMounted = false;

        this.chat = properties.chat;
        this.title = properties.title;
        this.state = {
            newMessage: "",
            messages: this.chat.getMessages(),
            isDragingOver: false,
            document: null
        };
        this.update();
    }

    update() {
        let newChat = getChat(this.chat);
        if (newChat != null) {
            this.chat = newChat;
        }

        if (!(this.chat instanceof Chat)) {
            this.chat = new ChatFactory().parseChat(this.chat);
        }

        console.log(newChat);
        console.log(this.chat);
        let loggedUser = OAuthService.getLoggedUser();
        let procesedMessages = [];
        for (var message of this.chat.getMessages()) {
            let isMine = (message.getUserUid() == loggedUser.getId());
            procesedMessages.push(
                <MessageModel key={message.getId()} isMine={isMine} message={message}></MessageModel>
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
        console.log(this.chat);
        let loggedUser = OAuthService.getLoggedUser();
        let message = new Message();
        message.setUserUid(loggedUser.getId());
        message.setMessage(this.state.newMessage);
        message.setAttachment(this.state.document);
        SocketController.sendMessage(this.chat, message);
        this.setState({ 
            newMessage: '',
            document: null
        });
    }

    onDragEnter(e) {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            this.setState({
                isDragingOver: true
            });
        }
    }

    onDragLeave(e) {
        e.preventDefault();
        this.setState({
            isDragingOver: false
        });
    }

    /** Supports Multi-Files upload */
    onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files.length > 0) {
            const filesUpload = e.dataTransfer.files;
            
            var instance = this;
            var files = [];
            Array.from(filesUpload).forEach((document, index) => {
                var reader = new FileReader();
                reader.readAsDataURL(document);
                reader.onloadend = function (e) {
                    let file = {};
                    file.name = document.name;
                    file.type = document.type;
                    file.size = document.size;
                    file.src = reader.result;
                    files.push(file);
                    
                    if (index == (filesUpload.length - 1)) {
                        this.setState({
                            document: files,
                            isDragingOver: false
                        });
                    }
                }.bind(instance);
            });
        }
    }

    removeDocuments() {
        this.setState({
            document: null
        })
    }

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        SocketObserver.subscribe(updateChat, 'ChatView', function() {instance.update()});
        SocketController.getChats();
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
            let firstDocument = this.state.document[0];
            if (firstDocument.type.includes("image")) {
                document = this.getImageView(firstDocument.src);
            } else {
                document = this.getDocumentView();
            }
        }
        return (
            <>
                <div className="py-2 px-4 border-bottom d-none d-lg-block" style={{backgroundColor: "#f0f2f5"}}>
                    <div className="d-flex align-items-center py-1">
                        <div className="position-relative">
                            <div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
                        </div>
                        <div className="flex-grow-1 pl-3">
                            <strong>{this.title}</strong>
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

    getImageView(image) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 position-relative" style={{background: "#ffffff9c", position: "absolute"}}>
                <img src={image} style={{maxWidth: "90%", maxHeight: "90%"}}/>
                <button id="close" onClick={() => {this.removeDocuments()}}></button>
            </div>
        );
    }

    getDocumentView() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100 position-relative" style={{background: "#ffffff9c", position: "absolute"}}>
                <i class="fa fa-solid fa-file" style={{fontSize: "8rem"}}></i>
                <button id="close" onClick={() => {this.removeDocuments()}}></button>
            </div>
        );
    }
}
export { ChatView }