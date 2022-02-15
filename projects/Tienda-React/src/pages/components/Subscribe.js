import React from 'react';
import { authService } from '../../services/firebase/AuthService';
import { localStorageService } from '../../services/LocalStorageService';

var instance = null;
class Subscribe  extends React.Component {
    constructor() {
        super();
        instance = this;
        this.email = 'Your Email...';
        this.isSubscribed = (localStorageService.loadUserUID() != null);
        this.state = {
            isSubscribed: this.isSubscribed
        };
    }

    onSubscribe() {
        authService.login(function(wasSuccessfully) {
            instance.setState({ isSubscribed: wasSuccessfully });
        });
    }

    onUnsubscribe() {
        authService.logout(function(wasSuccessfully) {
            instance.setState({ isSubscribed: !wasSuccessfully });
        })
    }

    render() {
        let result = (<div></div>);
        if (this.state.isSubscribed) {
            result = this.getSubscribedHTML();
        } else {
            result = this.getUnSubscribedHTML();
        }
        return result;
    }

    getSubscribedHTML() {
        let user = localStorageService.loadUser();
        return (
            <div className="subscribe-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={user.getPhotoURL()} className="img-fluid rounded-3" style={{borderRadius: "25px"}}/>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="main-content">
                                <p>{user.getName()}<br/>{user.getEmail()}</p>
                                <div className="container">
                                    <form id="subscribe" action="" method="get">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <fieldset>
                                                    <button type='button' id="form-submit" className="button" onClick={this.onUnsubscribe}>Unsubscribe</button>
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
        )
    }

    getUnSubscribedHTML() {
        return (
            <div className="subscribe-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h1>Subscribe on <u>Chinos Paco</u> now!</h1>
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
                                                    <button type='button' id="form-submit" className="button" onClick={this.onSubscribe}>Subscribe Now!</button>
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