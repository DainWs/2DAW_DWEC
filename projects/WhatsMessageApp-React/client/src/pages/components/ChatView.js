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
    constructor() {
        super();
        this.chat = null;
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
        SocketObserver.subscribe(updateChat, 'ChatView', this.forceUpdate.bind(this));
        SocketController.getChats();
        if (this.chat instanceof PublicChat) SocketController.connectChat();
    }

    componentWillUnmount() {
        SocketObserver.unsubscribe(updateChat, 'ChatView');
        if (this.chat instanceof PublicChat) SocketController.disconnectChat();
    }

    render() {
        this.chat = ChatProvider.provideCurrentChat();
        let result = (this.chat === null) ? <></> : this.getView();
        return (<div className="col-12 col-lg-7 col-xl-9 d-flex flex-column p-0 chat">{result}</div>);
    }

    getView() {
        return (
            <>
                {this.getChatHeader()}
                {this.getChatBody()}
                {this.getChatFooter()}
            </>
        );
    }

    /**** Chat Header ****/
    getChatHeader() {
        return (
            <div className="py-2 px-4 border-bottom d-none d-lg-block chat__header">
                <div className="d-flex align-items-center py-1">
                    <div className="position-relative">
                        <img src={`https://bootdey.com/img/Content/avatar/avatar${this.getImage()}.png`} class="rounded-circle mr-1" alt="Chat image" width="40" height="40"/>
                    </div>
                    <div className="flex-grow-1 pl-3 d-flex flex-column">
                        <strong>{this.getTitle()}</strong>
                        <span>{this.getWritingUsers()}</span>
                    </div>
                </div>
            </div>
        );
    }

    // The header image
    getImage() {
        return (this.chat instanceof PublicChat)
            ? 7
            : this.getImageFromUser();
    }

    // The header image when chat is private
    getImageFromUser() {
        let users = UserProvider.provideUsersOfChat(this.chat, false);
        return (users.length > 0)
            ? users[0].getImageId()
            : '1' ;
    }

    // The header title
    getTitle() {
        return (this.chat instanceof PublicChat)
            ? this.chat.getName()
            : this.getTitleFromUsers();
    }

    // The header title when chat is private
    getTitleFromUsers() {
        let users = UserProvider.provideUsersOfChat(this.chat, false);
        return (users.length > 0)
            ? users[0].getName()
            : '' ;
    }

    // The header notification for users saying that someone is writing
    getWritingUsers() {
        let result = '';
        let usersWriting = UserProvider.provideWritingUsersOfChat(this.chat);
        if (usersWriting.length > 0) {
            result = (this.chat instanceof PublicChat) 
                ? `${usersWriting[0].name} is writing...`
                : 'Writing...';
        }
        return result;
    }
    /**** END Chat Header ****/

    /**** Chat Body ****/
    getChatBody() {
        return (
            <div className="position-relative flex-grow-1 chat__body" onDragEnter={this.onDragEnter.bind(this)}>
                {this.getDocumentView()}
                <div className={`chat__body--dropzone ${this.getDraggingOverClass()}`}>
                    <div onDragOver={(e) => e.preventDefault()} //test this line
                        onDragLeave={this.onDragLeave.bind(this)} 
                        onDrop={this.onDrop.bind(this)}>
                    </div>
                    <i class="fa fa-solid fa-upload"></i>
                    <h1>Upload File</h1>
                    <p>Drag & Drop files here or click to upload</p>
                </div>
                <div className="chat__body--messages p-4">
                    {this.getMessages()}
                </div>
            </div>
        );
    }

    // The style for the dragging files action over chat
    getDraggingOverClass() {
        return (this.state.isDragingOver) ? 'drag-active' : '';
    }

    // The body messages from others users
    getMessages() {
        let loggedUser = OAuthService.getLoggedUser();
        let procesedMessages = [];
        for (var message of this.chat.getMessages()) {
            let isMy = (message instanceof ClientMessage && message.getUserUid() == loggedUser.getId());
            procesedMessages.push(
                <MessageModel key={message.getId()} isMy={isMy} message={message}></MessageModel>
            );
        }
        return procesedMessages;
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
                document = this.getImageItemView(firstDocument);
            } else {
                document = this.getDocumentItemView();
            }
        }
        return document;
    }

    // The image from the image type of dropped file
    getImageItemView(image) {
        return (
            <div className="chat__body--attachment image">
                <img src={image.getSrc()} alt={image.getName()} className="mw-90 mh-90"/>
                <button className="close" onClick={this.removeDocuments.bind(this)}></button>
            </div>
        );
    }

    // The document from dropped file
    getDocumentItemView() {
        return (
            <div className="chat__body--attachment document" >
                <i class="fa fa-solid fa-file"></i>
                <button className="close" onClick={this.removeDocuments.bind(this)}></button>
            </div>
        );
    }
    /**** END Chat Body ****/

    /**** Chat Footer ****/
    getChatFooter() {
        return (
            <div className="flex-grow-0 py-3 px-4 border-top chat__footer">
                <div className="input-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Type your message" 
                        value={this.state.newMessage} 
                        onChange={this.onChangeMessageInput.bind(this)}
                        onFocus={this.onFocusMessageInput.bind(this)}
                        onBlur={this.onBlurMessageInput.bind(this)}/>
                    <button className="btn btn-primary" onClick={this.sendMessage.bind(this)}>Send</button>
                </div>
            </div>
        );
    }
    /**** END Chat Footer ****/
}
export { ChatView }