import React from 'react';
import { ChatView } from './components/ChatView';
import { UsersList } from './components/UsersList';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { heUser: null };
  }

  onShowUserChat(user) {
    this.setState({ heUser: user });
  }

  render() {
    return (
      <div className="card" style={{height: "94vh", overflow: "hidden", backgroundImage: "url('assets/images/background.png')"}}>
        <div className="row g-0 h-100">
          <UsersList showUserChat={(user) => {this.onShowUserChat(user)}}></UsersList>
          {this.getChat()}
        </div>
      </div>
    );
  }

  getChat() {
    let result = <></>;
    if (this.state.heUser != null) {
      result = <ChatView user={this.state.heUser}></ChatView>;
    }
    return result;
  }
}

export default HomePage;