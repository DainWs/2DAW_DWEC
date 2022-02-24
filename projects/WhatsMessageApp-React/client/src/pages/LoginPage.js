import React from 'react';
import OAuthService from '../services/LocalOAuthService';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
        username: '',
        rememberMe: false
    };
  }

  onLogin() {
    let credentials = {};
    // TODO this uid will be changed for provided server uid
    credentials.uid = this.state.username;
    credentials.displayName = this.state.username;
    let loginResult = OAuthService.loginWith(JSON.stringify(credentials));
    if (loginResult) {
        this.props.loginComplete();
    }
  }

  onUsernameChange(event) {
    this.setState({
        username: event.target.value
    });
  }

  render() {
    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" id="username" className="form-control" value={this.state.username} onChange={(event) => {this.onUsernameChange(event)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-info btn-md" value="Log in" onClick={() => {this.onLogin()}}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default LoginPage;