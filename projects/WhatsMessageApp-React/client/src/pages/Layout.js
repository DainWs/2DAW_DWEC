import React from 'react';
import OAuthService from '../services/LocalOAuthService';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class Layout extends React.Component {
  constructor() {
    super();
  }

  onLoginComplete() {
    this.forceUpdate();
  }

  render() {
    let user = OAuthService.getLoggedUser();
    return (user && user.getId()) ? this.getNormalView() : this.getLoginFormView();
  }

  getLoginFormView() {
    return (
      <LoginPage loginComplete={() => {this.onLoginComplete()}} ></LoginPage>
    );
  }

  getNormalView() {
    return (
      <HomePage />
    );
  }
}

export default Layout;