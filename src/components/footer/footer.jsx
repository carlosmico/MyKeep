//React
import React from 'react';

//CSS
import "./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <span><span className="W">W</span><span className="P">P</span><span className="W">W</span></span>
            
            <span>© 2019 WPW. All rights reserved.</span>
            
            <span className="powered">Powered by: <a href="https://unsplash.com/" target="_blank">Unsplash</a></span>
        </div>
    );
}

export default Footer;