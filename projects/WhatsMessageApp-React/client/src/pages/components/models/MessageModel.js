import React from 'react';
import ClientMessage from '../../../models/messages/ClientMessage';
import OAuthService from '../../../services/LocalOAuthService';
import { UserProvider } from '../../../services/providers/UserProvider';

class MessageModel extends React.Component {
    constructor(properties) {
        super();
        this.isMy = properties.isMy;
        this.message = properties.message;
        this.user = (this.isMy) 
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
            <div className="message server mb-2">
                <div className={`rounded py-2 px-3 ml-3 mr-3 ${this.getServerMessageStateClass()}`}>
                    <div>
                        <p className="m-0">{this.message.getMessage()}</p>
                        <p className="m-0 date">{this.getDate()}</p>
                    </div>
                </div>
            </div>
        );
    }

    getServerMessageStateClass() {
        return (this.message.getType() == 2) ? "connected" : "disconnected";
    }

    getClientMessageHtmlView() {
        return (
            <div className={`message client mb-2 ${this.getMessageSide()}`}>
                <div>
                    <img src={this.getImage()} class="rounded-circle mr-1" alt={this.user.getName()} width="40" height="40"/>
                </div>
                <div className={`content rounded py-2 px-3 ml-3 mr-3 ${this.getMessageClass()}`}>
                    <div className="font-weight-bold mb-1">{this.user.getName()}</div>
                    <div className="text">
                        <p className="my-1">{this.message.getMessage()}</p>
                        {this.getAttachment()}
                        <p className="my-1 date">{this.getDate()}</p>
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
        if (!imageId) imageId = 1;
        return `https://bootdey.com/img/Content/avatar/avatar${imageId}.png`;
    }

    getMessageSide() {
        return (this.props.isMy) ? "right": "left";
    }

    getMessageClass() {
        return (this.props.isMy) ? "isMyMessage" : "";
    }

    getAttachment() {
        let attachments = this.message.getAttachments();
        var result = <></>;
        if (attachments.length > 0) {
            result = [];
            Array.from(attachments).forEach((attachment) => {
                if (attachment.getType().includes('image')) {
                    result.push(
                        <a className='attachment image my-1' href={attachment.getSrc()} download>
                            <img src={attachment.getSrc()} alt={attachment.getName()}/>
                        </a>
                    );
                } else {
                    result.push(
                        <a className='attachment document my-1' href={attachment.getSrc()} download>
                            <i class="fa fa-solid fa-file"></i>
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