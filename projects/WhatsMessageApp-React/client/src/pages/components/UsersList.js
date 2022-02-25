import React from 'react';
import UserFactory from '../../factories/UserFactory';
import { UserProvider } from '../../services/providers/UsersProvider';
import { SocketController } from '../../services/socket/SocketController';
import { updateUsers } from '../../services/socket/SocketEvents';
import { SocketObserver } from '../../services/socket/SocketObserver';
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
        this.users = UserProvider.provide();
        if (this.users == undefined || this.users == null) {
            this.users = [];
        }

        let procesedUsers = [];
        
        for (var userKey of this.users.keys()) {
            let userGeneric = this.users.get(userKey);
            console.log(userGeneric);
            let user = new UserFactory().parseUser(userGeneric);
            console.log(user);
            if (user.name.includes(this.filtre)) {
                procesedUsers.push(
                    <UserModel key={user.getId()} user={user} showChat={(user) => {this.showUserChat(user)}}></UserModel>
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

export { UsersList }