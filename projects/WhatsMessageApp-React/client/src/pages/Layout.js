import React from 'react';
import { Outlet } from "react-router-dom";
import OAuthService from '../services/LocalOAuthService';
import Header from "./components/Header";
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
      <>
        <Header></Header>
        <Outlet />
      </>
    );
  }
}

export default Layout;