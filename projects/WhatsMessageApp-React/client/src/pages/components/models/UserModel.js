import React from 'react';

class UserModel extends React.Component {
    constructor(properties) {
        super();
        this.state = { 
            user: properties.user,
        };
    }

    showChat(instance) {
        instance.props.showChat(instance.state.user);
    }

    render() {
        let pendingView = (this.state.user.getPendingMessages() > 0) 
            ? (<div className="badge bg-success float-right">{this.state.user.getPendingMessages()}</div>) 
            : (<></>);
        return (
            <a className="list-group-item list-group-item-action border-0" onClick={() => { this.showChat(this) }}>
                {pendingView}
                <div className="d-flex align-items-start">
                    <div style={{width: "40", height: "40"}}><i className="fa fa-solid fa-user rounded-circle mr-1"></i></div>
                    <div className="flex-grow-1 ml-3">
                        {this.state.user.getName()}
                    </div>
                </div>
            </a>
        );
    }
}
//<div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
export default UserModel;