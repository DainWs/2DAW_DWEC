import React from 'react';
import OAuthService from '../../../services/LocalOAuthService';
import { getUsersOfMessage } from '../../../services/query/Queries';

class MessageModel extends React.Component {
    constructor(properties) {
        super();
        this.isMine = properties.isMine;
        this.message = properties.message;
        this.user = (this.isMine) 
            ? OAuthService.getLoggedUser() 
            : getUsersOfMessage(this.message);
    }

    render() {
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
        console.log(this.message.getAttachment());
        var attachments = <></>;
        if (this.message.getAttachment() !== null) {
            attachments = [];
            Array.from(this.message.getAttachment()).forEach((attachment) => {
                console.log(attachment);
                if (attachment.type.includes('image')) {
                    attachments.push(
                        <a className='d-flex my-1 attachment' href={attachment.src} download>
                            <img className="attachment" src={attachment.src}/>
                        </a>
                    );
                } else {
                    attachments.push(
                        <a className='d-flex my-1 attachment' href={attachment.src} download>
                            <i class="fa fa-solid fa-file" style={{fontSize: "4rem"}}></i>
                            <div className="mx-2">
                                <span>{attachment.name}</span><br/>
                                <span className="size">{attachment.size} bytes</span>
                            </div>
                        </a>
                    );
                }
            });
        }
        return attachments;
    }
}
//<div style={{ width: "40", height: "40" }}><i className="fa fa-solid fa-user rounded-circle mr-1 ml-1"></i></div>
export default MessageModel;