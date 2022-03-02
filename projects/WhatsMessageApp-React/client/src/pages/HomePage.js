import React from 'react';
import { ChatView } from './components/ChatView';
import { ChatsList } from './components/ChatsList';
import { SocketController } from '../services/socket/SocketController';

class HomePage extends React.Component {
  constructor() {
    super();
    SocketController.getChats();
    SocketController.getUsers();
  }

  render() {
    return (
      <div className="card" id="home" style={{backgroundImage: "url('assets/images/background.png')"}}>
        <div className="row g-0 h-100 m-0">
          <ChatsList/>
          <ChatView/>
        </div>
      </div>
    );
  }
}

export default HomePage;