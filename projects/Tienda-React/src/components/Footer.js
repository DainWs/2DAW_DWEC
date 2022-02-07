import React from 'react';
import APP_CONFIG from '../AppConfig';

class Footer  extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12"><br/></div>
                            <div class="col-md-12">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">How It Works ?</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="social-icons">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright-text">
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