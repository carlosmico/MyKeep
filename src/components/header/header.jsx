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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Google_Keep_icon.svg/245px-Google_Keep_icon.svg.png" alt="Logo" />
                    <span className="title">My Keep</span>
                </Link>

                {/* If user is logged show Profile else Signs buttons */}
                {
                    this.props.userLogged ?
                        <div className="buttoner">
                            <Link to="profile">Profile</Link>
                        </div>
                        :
                        <div className="buttoner">
                            <Link to="register">Sign up</Link>
                            <Link to="login">Sign in</Link>
                        </div>
                }
            </div>
        );
    }
}

export default Header;