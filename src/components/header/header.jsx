import React from 'react';
import {Link} from 'react-router-dom';

//CSS
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Link className="logo" to="/">
                    <img src="img/logo.png" alt="Logo" />
                    <span className="title">WPW</span>
                </Link>

                <div className="buttoner">
                    <Link to="random">Random Photo</Link>
                    <Link to="categories">Categories</Link>
                </div>
        
            </div>
        );
    }
}

export default Header;