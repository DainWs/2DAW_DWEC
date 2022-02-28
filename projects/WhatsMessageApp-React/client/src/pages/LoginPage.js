import React from 'react';
import { AllowedImagesId, AllowedStatesId } from '../models/User';
import OAuthService from '../services/LocalOAuthService';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            selectedImage: 1,
            state: 1
        };
    }

    onLogin() {
        let credentials = {};
        credentials.id = this.state.username;
        credentials.name = this.state.username;
        credentials.imageId = parseInt(this.state.selectedImage);
        credentials.state = this.state.state;
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

    onSelectedImageChange(event) {
        let newImage = parseInt(event.target.value);
        if (AllowedImagesId.has(newImage)) {
            this.setState({
                selectedImage: newImage
            });
        }
    }

    onSelectedStateChange(event) {
        let newState = parseInt(event.target.value);
        if (AllowedStatesId.has(newState)) {
            this.setState({
                state: newState
            });
        }
    }

    render() {
        return (
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container login-container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-9">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <div className="form-group d-flex flex-wrap">
                                        {this.getImages()}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br />
                                        <input type="text" id="username" className="form-control" value={this.state.username} onChange={(event) => { this.onUsernameChange(event) }} />
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <input type="button" className="btn btn-info btn-md" value="Log in" onClick={() => { this.onLogin() }} />

                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <input type="radio" name="options" className="d-none" id="connected" checked={this.state.state == '2'} value={2} onChange={(event) => { this.onSelectedStateChange(event) }} /> 
                                            <label class={`btn btn-info rounded-left ${this.getActiveClassIfChecked('2')}`} htmlFor="connected">
                                                Connected
                                            </label>
                                            
                                            <input type="radio" name="options" className="d-none" id="disconected" checked={this.state.state == '1'} value={1} onChange={(event) => { this.onSelectedStateChange(event) }} />
                                            <label class={`btn btn-info rounded-right ${this.getActiveClassIfChecked('1')}`} htmlFor="disconected">
                                                Disconected
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getActiveClassIfChecked(valueExpected) {
        return (this.state.state == valueExpected) ? 'active' : '';
    }

    getImages() {
        var images = [];
        AllowedImagesId.forEach( (imageDesc, imageId) => {
            images.push(
                <div className="col-md-4">
                    <input type="radio" className="btn-check d-none" id={`image${imageId}`} autocomplete="off" checked={this.state.selectedImage == `${imageId}`} value={imageId} onChange={(event) => { this.onSelectedImageChange(event) }} />
                    <label className="btn btn-img rounded-sm" for={`image${imageId}`} style={{ padding: "0.75rem"}}>
                        <img className="rounded-sm w-100" src={`https://bootdey.com/img/Content/avatar/avatar${imageId}.png`} alt={imageDesc}/>
                    </label>
                </div>
            )
        });
        return images;
    }
}

export default LoginPage;