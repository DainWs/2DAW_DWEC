import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import React from 'react';

class Subscribe  extends React.Component {
    constructor() {
        super();
        this.email = 'Your Email...';
    }

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
            <div className="subscribe-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h1>Subscribe on PIXIE now!</h1>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="main-content">
                                <p>Integer vel turpis ultricies, lacinia ligula id, lobortis augue. Vivamus porttitor dui id dictum efficitur. Phasellus vel interdum elit.</p>
                                <div className="container">
                                    <form id="subscribe" action="" method="get">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <button type='button' id="form-submit" className="button" onClick={this.onLogin}>Subscribe Now!</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;