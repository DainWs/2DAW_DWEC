import React from 'react';
import { login } from '../../services/SessionManager';

class Subscribe  extends React.Component {
    constructor() {
        super();
        this.email = 'Your Email...';
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
                                                    <button type='button' id="form-submit" className="button" onClick={login}>Subscribe Now!</button>
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