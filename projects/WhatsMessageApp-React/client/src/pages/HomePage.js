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
        <div className="row g-0 h-100 m-0">
          <UsersList showUserChat={(user) => {this.onShowUserChat(user)}}></UsersList>

          <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column p-0">
            {this.getChat()}
          </div>
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