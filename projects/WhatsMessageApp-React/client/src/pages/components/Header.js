import React from 'react';
import { Link } from 'react-router-dom';

class Header  extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-light" style={{backgroundColor: "#00a884"}}>
                    <Link to="/" className="navbar-brand" style={{color: "white"}}><h1 className="h3 m-0">WhatsMessage</h1></Link>
                    <Link to="/settings" className="nav-item h3 m-0 text-secondary"><i className="fa fa-solid fa-gear" style={{color: "white"}}></i></Link>
                </nav>
            </header>
        );
    }
}

export default Header;