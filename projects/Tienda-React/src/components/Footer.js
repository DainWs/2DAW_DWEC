import React from 'react';
import APP_CONFIG from '../AppConfig';

class Footer  extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12"><br/></div>
                            <div className="col-md-12">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">How It Works ?</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                <p>Copyright &copy; 2022 {APP_CONFIG.name} - Design: <a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;