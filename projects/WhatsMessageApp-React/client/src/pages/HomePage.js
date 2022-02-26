import React from 'react';
import { ChatView } from './components/ChatView';
import { ChatsList } from './components/ChatsList';
import { SocketController } from '../services/socket/SocketController';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { 
      chat: null,
      title: null
    };
    SocketController.getChats();
    SocketController.getUsers();
  }

  onShowChat(data) {
    console.log(data.chat);
    this.setState({ 
      chat: data.chat,
      title: data.title
    });
  }

  render() {
    return (
      <div className="card" style={{height: "94vh", overflow: "hidden", backgroundImage: "url('assets/images/background.png')"}}>
        <div className="row g-0 h-100 m-0">
          <ChatsList showChat={(data) => {this.onShowChat(data)}}></ChatsList>

          <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column p-0">
            {this.getChat()}
          </div>
        </div>
      </div>
    );
  }

  getChat() {
    let result = <></>;
    if (this.state.chat != null) {
      result = <ChatView chat={this.state.chat} title={this.state.title}></ChatView>;
    }
    return result;
  }
}

export default HomePage;