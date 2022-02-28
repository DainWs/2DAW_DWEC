import React from 'react';
import ClientMessage from '../../../models/messages/ClientMessage';
import OAuthService from '../../../services/LocalOAuthService';
import { UserProvider } from '../../../services/providers/UserProvider';

class MessageModel extends React.Component {
    constructor(properties) {
        super();
        this.isMine = properties.isMine;
        this.message = properties.message;
        this.user = (this.isMine) 
            ? OAuthService.getLoggedUser() 
            : UserProvider.provideUsersOfMessage(this.message);
    }

    render() {
        let result = null;
        if (this.message instanceof ClientMessage) {
            result = this.getClientMessageHtmlView();
        } else {
            result = this.getServerMessageHtmlView();
        }
        return result;
    }

    getServerMessageHtmlView() {
        return (
            <div className="mb-2">
                <div className="flex-shrink-1 rounded py-2 px-3 ml-3 mr-3" style={this.getServerMessageColor()}>
                    <div className="d-flex flex-column">
                        <p className="m-0" style={{textAlign: "center"}}>{this.message.getMessage()}</p>
                        <p className="m-0" style={{textAlign: "center", fontSize: "0.7rem"}}>{this.getDate()}</p>
                    </div>
                </div>
            </div>
        );
    }

    getServerMessageColor() {
        return (this.message.getType() == 2) 
            ? {background: "rgb(176 223 255)"}
            : {background: "rgb(255 164 164)"};
    }

    getClientMessageHtmlView() {
        return (
            <div className={this.getMessageClass()}>
                <div>
                    <img src={this.getImage()} class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 mr-3" style={this.getMessageStyle()}>
                    <div className="font-weight-bold mb-1">{this.user.getName()}</div>
                    <div className="d-flex flex-column">
                        <p className="my-1">{this.message.getMessage()}</p>
                        {this.getAttachment()}
                        <p className="my-1" style={{textAlign: "right", fontSize: "0.7rem"}}>{this.getDate()}</p>
                    </div>
                </div>
            </div>
        );
    }

    getDate() {
        let date = new Date(this.message.getId());
        let sec = String(date.getSeconds()).padStart(2, '0');
        let min = String(date.getMinutes()).padStart(2, '0');
        let hour = String(date.getHours()).padStart(2, '0');
        let day = String(date.getDate()).padStart(2, '0');
        let mon = String(date.getMonth() - 1).padStart(2, '0');
        let year = date.getFullYear();
        return `${hour}:${min}:${sec} ${day}/${mon}/${year}`;
    }

    getImage() {
        let imageId = this.user.getImageId();
        if (!imageId) {
            imageId = 1;
        }
        return `https://bootdey.com/img/Content/avatar/avatar${imageId}.png`;
    }

    getMessageClass() {
        return (this.props.isMine) 
            ? "chat-message-right d-flex align-items-center flex-row-reverse mb-2" 
            : "chat-message-left d-flex align-items-center mb-2";
    }

    getMessageStyle() {
        return (this.props.isMine) 
            ? {backgroundColor: "#d9fdd3"} 
            : {}
    }

    getAttachment() {
        let attachments = this.message.getAttachments();
        var result = <></>;
        if (attachments.length > 0) {
            result = [];
            Array.from(attachments).forEach((attachment) => {
                if (attachment.getType().includes('image')) {
                    result.push(
                        <a className='d-flex my-1 attachment' href={attachment.getSrc()} download>
                            <img className="attachment" src={attachment.getSrc()}/>
                        </a>
                    );
                } else {
                    result.push(
                        <a className='d-flex my-1 attachment' href={attachment.getSrc()} download>
                            <i class="fa fa-solid fa-file" style={{fontSize: "4rem"}}></i>
                            <div className="mx-2">
                                <span>{attachment.getName()}</span><br/>
                                <span className="size">{attachment.getSize()} bytes</span>
                            </div>
                        </a>
                    );
                }
            });
        }
        return result;
    }
}
//<div style={{ width: "40", height: "40" }}><i className="fa fa-solid fa-user rounded-circle mr-1 ml-1"></i></div>
export default MessageModel;