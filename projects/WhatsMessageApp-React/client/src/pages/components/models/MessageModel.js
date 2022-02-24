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
        let messageClass = (this.props.isMine) ? "chat-message-right d-flex align-items-center flex-row-reverse" : "chat-message-left d-flex align-items-center";

        return (
            <div className={messageClass}>
                <div>
                    <div style={{ width: "40", height: "40" }}><i className="fa fa-solid fa-user rounded-circle mr-1 ml-1"></i></div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 mr-3">
                    <div className="font-weight-bold mb-1">{this.state.user.getName()}</div>
                    {this.state.message}
                </div>
            </div>
        );
    }
}
export default MessageModel;