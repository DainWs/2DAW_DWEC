import React from 'react';
import { UserProvider } from '../../services/providers/UsersProvider';
import { getPublicChats } from '../../services/query/Queries';
import { SocketController } from '../../services/socket/SocketController';
import { updateUsers } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
import PrivateChatModel from './models/PrivateChatModel';
import PublicChatModel from './models/PublicChatModel';

class ChatsList extends React.Component {
    constructor() {
        super();
        this.users = new Map();
        this.publicChats = new Map();
        this.filtre = '';
        this.isComponentMounted = false;
        this.state = {
            users: []
        };
        this.update();
    }

    update() {
        var procesedUsers = [];
        this.publicChats = getPublicChats();
        console.log(this.publicChats);
        this.publicChats.forEach((chat) => {
            if (chat.getName().includes(this.filtre)) {
                procesedUsers.push(
                    <PublicChatModel key={chat.getId()} chat={chat} showChat={(chat) => {this.showChat(chat)}}></PublicChatModel>
                );
            }
        });

        var firstUsersList = []
        var lastUsersList = []
        this.users = UserProvider.provide();
        this.users.forEach((user) => {
            if (user.getName().includes(this.filtre)) {
                if (user.getState() == 1) {
                    firstUsersList.push(
                        <PrivateChatModel key={user.getId()} user={user} showChat={(chat) => {this.showChat(chat)}}></PrivateChatModel>
                    );
                } else {
                    lastUsersList.push(
                        <PrivateChatModel key={user.getId()} user={user} showChat={(chat) => {this.showChat(chat)}}></PrivateChatModel>
                    );
                }
            }
        });

        console.log(firstUsersList);
        console.log(lastUsersList);
        procesedUsers.push(firstUsersList);
        procesedUsers.push(lastUsersList);

        if (this.isComponentMounted) {
            this.setState({ users: procesedUsers });
        } else {
            this.state = { users: procesedUsers };
        }
    }

    showChat(user) {
        this.props.showChat(user);
    }

    onFiltreChange(event) {
        this.filtre = event.target.value;
        this.update();
    }

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        SocketObserver.subscribe(updateUsers, 'UsersList', function() {instance.update()});
        SocketController.getUsers();
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        SocketObserver.unsubscribe(updateUsers, 'UsersList');
    }

    render() {
        return (
            <div className="p-0 col-12 col-lg-5 col-xl-3 border-right" style={{backgroundColor: "#f0f2f5"}}>

                <div className="px-4 d-none d-md-block">
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                            <input type="text" className="form-control my-3" placeholder="Search..." value={this.filtre} onChange={(event) => {this.onFiltreChange(event)}}/>
                        </div>
                    </div>
                </div>

                {this.state.users}

                <hr className="d-block d-lg-none mt-1 mb-0"/>
            </div>
        );
    }
}

export { ChatsList }