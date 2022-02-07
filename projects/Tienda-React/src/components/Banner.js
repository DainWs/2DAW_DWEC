import React from 'react';

class Banner  extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="caption">
                                <h2>Ecommerce HTML Template</h2>
                                <div className="line-dec"></div>
                                <p>Pixie HTML Template can be converted into your desired CMS theme. Total <strong>5 pages</strong> included. You can use this Bootstrap v4.1.3 layout for any CMS. 
                                <br/><br/>Please tell your friends about <a rel="nofollow" href="https://www.facebook.com/tooplate/">Tooplate</a> free template site. Thank you. Photo credit goes to <a rel="nofollow" href="https://www.pexels.com">Pexels website</a>.</p>
                                <div className="main-button">
                                    <a href="#">Order Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;