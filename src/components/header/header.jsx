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
                    <span className="title">WPW</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="random">Random Wallpaper</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="collections">Collections</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            // <div className="header">
            //     <Link className="logo" to="/">
            //         <img src="img/logo.png" alt="Logo" />
            //         <span className="title">WPW</span>
            //     </Link>

            //     <div className="buttoner">
            //         <Link to="random">Random Wallpaper</Link>
            //         <Link to="collections">Collections</Link>
            //     </div>
            // </div>
        );
    }
}

export default Header;