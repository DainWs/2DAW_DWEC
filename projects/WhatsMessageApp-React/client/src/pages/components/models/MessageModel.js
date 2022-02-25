import React from 'react';

class MessageModel extends React.Component {
    constructor(properties) {
        super();
        this.state = {
            user: properties.user,
            message: properties.message
        };
    }

    render() {
        let imageId = this.state.user.getImageId();
        if (imageId) {
            imageId = 1;
        }
        let img = `https://bootdey.com/img/Content/avatar/avatar${imageId}.png`;
        let messageClass = (this.props.isMine) ? "chat-message-right d-flex align-items-center flex-row-reverse mb-2" : "chat-message-left d-flex align-items-center mb-2";
        let messageStyle = (this.props.isMine) ? {backgroundColor: "#d9fdd3"} : {} ;
        return (
            <div className={messageClass}>
                <div>
                    <img src={img} class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 mr-3" style={messageStyle}>
                    <div className="font-weight-bold mb-1">{this.state.user.getName()}</div>
                    {this.state.message}
                </div>
            </div>
        );
    }
}
//<div style={{ width: "40", height: "40" }}><i className="fa fa-solid fa-user rounded-circle mr-1 ml-1"></i></div>
export default MessageModel;