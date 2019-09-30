import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand logo" to="/">
                    <img src="img/logo.png" alt="Logo" />
                    <span className="title"><span className="W">W</span><span className="P">P</span><span className="W">W</span></span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/photo/random">Random Wallpaper</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/collections">Collections</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;