import React from 'react';
import { Link } from 'react-router-dom';

class Header  extends React.Component {
    render() {
        return (
            <header style={{height: "6vh"}}>
                <nav className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-brand"><h1 className="h3 m-0">WhatsMessage</h1></Link>
                    <Link to="/settings" className="nav-item h3 m-0 text-secondary"><i className="fa fa-solid fa-gear"></i></Link>
                </nav>
            </header>
        );
    }
}

export default Header;