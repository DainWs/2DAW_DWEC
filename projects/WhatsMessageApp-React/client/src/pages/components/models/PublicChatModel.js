import React from 'react';

class PublicChatModel extends React.Component {
    constructor(properties) {
        super();
        this.state = { 
            chat: properties.chat,
        };
    }

    showChat(instance) {
        let chat = instance.state.chat;
        instance.props.showChat({chat: chat, title: chat.getName()});
    }

    render() {
        return (
            <a className="list-group-item list-group-item-action border-0" onClick={() => { this.showChat(this) }}>
                <div className="d-flex align-items-start">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                    <div className="flex-grow-1 ml-3">
                        {this.state.chat.getName()}
                        <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                    </div>
                </div>
            </a>
        );
    }
}
//<div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
export default PublicChatModel;