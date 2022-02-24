import React from 'react';
import UserFactory from '../../factories/UserFactory';
import { socketManager, UserListChanged, UsersConnectedReceived } from '../../services/socket/SocketManager';
import UserModel from './models/UserModel';

class UsersList extends React.Component {
    constructor() {
        super();
        this.users = [];
        this.filtre = '';
        this.isComponentMounted = false;
        this.state = {
            users: []
        };
        this.update();
    }

    update() {
        let credentials = {};
        // TODO this uid will be changed for provided server uid
        credentials.uid = new Date().getTime();
        credentials.displayName = 'DainWsBot';
        let userTmp = new UserFactory().parseObject(credentials);
        
        this.users = socketManager.getData(UsersConnectedReceived);
        this.users.push(userTmp);
        console.log(this.users);
        let procesedUsers = [];
        for (var userGeneric of this.users) {
            let user = new UserFactory().parseObject(userGeneric);
            if (user.getName().includes(this.filtre)) {
                procesedUsers.push(
                    <UserModel key={user.getUid()} user={user} showChat={(user) => {this.showUserChat(user)}}></UserModel>
                );
            }
        }

        if (this.isComponentMounted) {
            this.setState({ users: procesedUsers });
        } else {
            this.state = { users: procesedUsers };
        }
    }

    showUserChat(user) {
        this.props.showUserChat(user);
    }

    onFiltreChange(event) {
        this.filtre = event.target.value;
        this.update();
    }

    componentDidMount() {
        this.isComponentMounted = true;
        var instance = this;
        socketManager.subscribe('UsersList', UserListChanged, function() {instance.update()});
        socketManager.subscribe('UsersList', UsersConnectedReceived, function() {instance.update();});
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        socketManager.unsubscribe('UsersList', UserListChanged);
    }

    render() {
        return (
            <div className="col-12 col-lg-5 col-xl-3 border-right">
                
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

export { UsersList }