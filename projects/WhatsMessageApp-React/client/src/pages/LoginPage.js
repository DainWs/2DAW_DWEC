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
        credentials.state = this.state.connectionState;
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
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-9">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image1" autocomplete="off" checked={this.state.selectedImage == '1'} value={1} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image1" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Image 1" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image2" autocomplete="off" checked={this.state.selectedImage == '2'} value={2} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image2" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Image 2" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image3" autocomplete="off" checked={this.state.selectedImage == '3'} value={3} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image3" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Image 3" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image4" autocomplete="off" checked={this.state.selectedImage == '4'} value={4} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image4" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Image 4" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image5" autocomplete="off" checked={this.state.selectedImage == '5'} value={5} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image5" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Image 5" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <input type="radio" className="btn-check d-none" id="image6" autocomplete="off" checked={this.state.selectedImage == '6'} value={6} onChange={(event) => { this.onSelectedImageChange(event) }} />
                                                <label className="btn btn-secondary" for="image6" style={{ backgroundColor: "#00a884", padding: "0.75rem", borderRadius: "15px" }}>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Image 6" style={{ width: "100%" }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br />
                                        <input type="text" id="username" className="form-control" value={this.state.username} onChange={(event) => { this.onUsernameChange(event) }} />
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <input type="button" className="btn btn-info btn-md" value="Log in" onClick={() => { this.onLogin() }} />

                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <input type="radio" name="options" className="d-none" id="connected" checked={this.state.state == '2'} value={2} onChange={(event) => { this.onSelectedStateChange(event) }} /> 
                                            <label class="btn btn-secondary" htmlFor="connected" style={{ backgroundColor: "#00a884"}}>
                                                Connected
                                            </label>
                                            
                                            <input type="radio" name="options" className="d-none" id="disconected" checked={this.state.state == '1'} value={1} onChange={(event) => { this.onSelectedStateChange(event) }} />
                                            <label class="btn btn-secondary" htmlFor="disconected" style={{ backgroundColor: "#00a884"}}>
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
}

export default LoginPage;