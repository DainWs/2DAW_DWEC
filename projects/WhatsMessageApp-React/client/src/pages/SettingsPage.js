import React from 'react';
import OAuthService from '../services/LocalOAuthService';

class SettingsPage extends React.Component {
  constructor() {
    super();
    OAuthService.logout();
  }

  render() {
    return (
      <div className="card" style={{height: "94vh", overflow: "hidden", backgroundImage: "url('assets/images/background.png')"}}>
        <div className="row g-0 h-100 m-0">

        </div>
      </div>
    );
  }
}

export default SettingsPage;