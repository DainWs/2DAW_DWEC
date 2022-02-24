import React from 'react';
import OAuthService from '../services/LocalOAuthService';

class SettingsPage extends React.Component {
  constructor() {
    super();
    OAuthService.logout();
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default SettingsPage;