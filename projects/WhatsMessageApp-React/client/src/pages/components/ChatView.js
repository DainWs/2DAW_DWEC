import React from 'react';
import MessageFactory from '../../factories/MessagesFactory';
import PublicChat from '../../models/chats/PublicChat';
import Attachment from '../../models/messages/attachment/Attachment';
import ClientMessage from '../../models/messages/ClientMessage';
import OAuthService from '../../services/LocalOAuthService';
import { ChatProvider } from '../../services/providers/ChatProvider';
import { UserProvider } from '../../services/providers/UserProvider';
import { SocketController } from '../../services/socket/SocketController';
import { updateChat } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
import MessageModel from './models/MessageModel';

class ChatView extends React.Component {
    constructor(properties) {
        super();
        this.isComponentMounted = false;

        this.chat = null;
        this.title = '';
        this.state = {
            newMessage: "",
            isDragingOver: false,
            document: null
        };
    }
    
    /** Start Message operations **/

    onChangeMessageInput(event) {
        this.setState({
            newMessage: event.target.value
        });
    }

    /**
     * Notify the server that the logged user is writing in the specified chat
     */
    onFocusMessageInput() {
        SocketController.writingMessageIn(this.chat, true);
    }

    /**
     * Notify the server that the logged user has stopped writing in the specified chat
     */
    onBlurMessageInput() {
        SocketController.writingMessageIn(this.chat, false);
    }

    /**
     * Send the message, if this message has attachments, 
     * this ones are sended too
     */
    sendMessage() {
        let loggedUser = OAuthService.getLoggedUser();
        let message = new MessageFactory().getNewClientMessage(loggedUser);
        message.setMessage(this.state.newMessage);
        message.setAttachments(this.state.document);
        SocketController.sendMessage(this.chat, message);
        this.setState({ 
            newMessage: '',
            document: null
        });
    }

    /** End Message operations **/

    /** Start of attachment section **/

    /** 
     * Control when a drag event enter over the chat element, only works with files drag events 
     */
    onDragEnter(e) {
        e.preventDefault();
        this.setState({
            isDragingOver: true
        });
    }

    /** 
     * Control when a drag event enter over the chat element, only works with files drag events 
     */
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
            
            // Read each dropped file and make a "Document" array of object
            var instance = this;
            var documents = [];
            Array.from(filesUpload).forEach((document, index) => {
                var reader = new FileReader();
                reader.readAsDataURL(document);
                reader.onloadend = function (e) {
                    let attachment = new Attachment();
                    attachment.setName(document.name);
                    attachment.setType(document.type);
                    attachment.setSize(document.size);
                    attachment.setSrc(reader.result);
                    documents.push(attachment);
                    
                    if (index == (filesUpload.length - 1)) {
                        this.setState({
                            document: documents,
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
    /** End of attachment section **/

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        SocketObserver.subscribe(updateChat, 'ChatView', function() {instance.forceUpdate()});
        SocketController.getChats();

        if (this.chat instanceof PublicChat) SocketController.connectChat();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        SocketObserver.unsubscribe(updateChat, 'ChatView');
        if (this.chat instanceof PublicChat) SocketController.disconnectChat();
    }

    render() {
        this.chat = ChatProvider.provideCurrentChat();
        console.log(this.chat);
        let result = (this.chat === null) 
            ? <></>
            : (
                <>
                    <div className="py-2 px-4 border-bottom d-none d-lg-block" style={{backgroundColor: "#f0f2f5"}}>
                        <div className="d-flex align-items-center py-1">
                            <div className="position-relative">
                                <img src={`https://bootdey.com/img/Content/avatar/avatar${this.getImage()}.png`} class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                            </div>
                            <div className="flex-grow-1 pl-3 d-flex flex-column">
                                <strong>{this.getTitle()}</strong>
                                <span>{this.getWritingUsers()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative flex-grow-1 drop-container drop-message" style={{overflowY: "scroll"}} onDragEnter={(e) => {this.onDragEnter(e)}}>
                        {this.getDocumentView()}
                        <div className={this.getDraggingOverClasses()}>
                            <div className="position-absolute w-100 h-100" 
                                style={{zIndex: "10", top: "0", left: "0"}}
                                onDragOver={(e) => e.preventDefault()} //test this line
                                onDragLeave={(e) => {this.onDragLeave(e)}} 
                                onDrop={(e) => {this.onDrop(e)}}>
                            </div>
                            <i class="fa fa-solid fa-upload"></i>
                            <h1>Upload File</h1>
                            <p>Drag & Drop files here or click to upload</p>
                        </div>
                        <div className="chat-messages p-4">
                            {this.getMessages()}
                        </div>
                    </div>

                    <div className="flex-grow-0 py-3 px-4 border-top" style={{backgroundColor: "#f0f2f5"}}>
                        <div className="input-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Type your message" 
                                value={this.state.newMessage} 
                                onChange={(event) => {this.onChangeMessageInput(event)}}
                                onFocus={() => {this.onFocusMessageInput()}}
                                onBlur={() => {this.onBlurMessageInput()}}/>
                            <button className="btn btn-primary" onClick={() => {this.sendMessage()}}>Send</button>
                        </div>
                    </div>
                </>
            );
        return (
            <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column p-0" style={{maxHeight: "100%"}}>
                {result}
            </div>
        );
    }

    getImage() {
        return (this.chat instanceof PublicChat)
            ? 7
            : this.getImageFromUser();
    }

    getImageFromUser() {
        let users = UserProvider.provideUsersOfChat(this.chat, false);
        return (users.length > 0)
            ? users[0].getImageId()
            : '1' ;
    }

    getTitle() {
        return (this.chat instanceof PublicChat)
            ? this.chat.getName()
            : this.getTitleFromUsers();
    }

    getTitleFromUsers() {
        let users = UserProvider.provideUsersOfChat(this.chat, false);
        return (users.length > 0)
            ? users[0].getName()
            : '' ;
    }

    getMessages() {
        console.log(this.chat);
        let loggedUser = OAuthService.getLoggedUser();
        let procesedMessages = [];
        for (var message of this.chat.getMessages()) {
            let isMine = (message instanceof ClientMessage && message.getUserUid() == loggedUser.getId());
            procesedMessages.push(
                <MessageModel key={message.getId()} isMine={isMine} message={message}></MessageModel>
            );
        }
        return procesedMessages;
    }

    getWritingUsers() {
        let result = null;
        let loggedUser = OAuthService.getLoggedUser();
        let writingUsers = this.chat.getWritingUsers();
        let otherUsersWriting = writingUsers.filter((writingUsers) => writingUsers.id !== loggedUser.getId());
        if (otherUsersWriting.length > 0) {
            if (this.chat instanceof PublicChat) {
                result = `${otherUsersWriting[0].name}  is writing...`;
            } else {
                result = 'Writing...';
            }
        }
        return result;
    }

    getDraggingOverClasses() {
        return (this.state.isDragingOver) 
            ? 'drop-zone flex-column justify-content-center align-items-center drog-active' 
            : 'drop-zone flex-column justify-content-center align-items-center';
    }

    /**
     * When you drop a document over the chat, this will be show
     * while you write your message or click in send button.
     */
    getDocumentView() {
        let document = <></>;
        if (this.state.document != null) {
            let firstDocument = this.state.document[0];
            if (firstDocument.getType().includes("image")) {
                document = this.getImageItemView(firstDocument.getSrc());
            } else {
                document = this.getDocumentItemView();
            }
        }
        return document;
    }

    getImageItemView(image) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 position-absolute" 
                    style={{background: "#ffffff9c", position: "absolute"}}>
                <img src={image} style={{maxWidth: "90%", maxHeight: "90%"}}/>
                <button id="close" onClick={() => {this.removeDocuments()}}></button>
            </div>
        );
    }

    getDocumentItemView() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100 position-absolute" 
                    style={{background: "#ffffff9c", position: "absolute"}}>
                <i class="fa fa-solid fa-file" style={{fontSize: "8rem"}}></i>
                <button id="close" onClick={() => {this.removeDocuments()}}></button>
            </div>
        );
    }
}
export { ChatView }