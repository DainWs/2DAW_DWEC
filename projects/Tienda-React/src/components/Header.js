import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import React from 'react';

class Header  extends React.Component {

    onLogin() {
        let auth = getAuth();
        auth.languageCode = 'it';
        let provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        
            console.log('Successfully registered!');
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <header id="header" class="top-head">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4 col-sm-12 left-rs">
                                <div class="navbar-header">
                                    <button type="button" id="top-menu" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"> 
                                    <span class="sr-only">Toggle navigation</span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span> 
                                    </button>
                                    <a href="index.html" class="navbar-brand"><img src="images/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12">
                                <div class="login-sr">
                                    <div class="login-signup">
                                        <ul>
                                            <li><a onClick={this.onLogin}>Login</a></li>
                                            <li><a class="custom-b" href="#">Sign up</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="right-nav">
                                    <div class="nav-b hidden-xs">
                                        <div class="nav-box">
                                            <ul>
                                                <li><a href="howitworks.html">How it works</a></li>
                                                <li><a href="about-us.html">Chamb for Business</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;