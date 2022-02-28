import React from 'react';
import { Link } from 'react-router-dom';

class Header  extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-light" style={{backgroundColor: "#00a884"}}>
                    <Link to="/" className="navbar-brand" style={{color: "white"}}><h1 className="h3 m-0">WhatsMessage</h1></Link>
                </nav>
            </header>
        );
    }
}

export default Header;