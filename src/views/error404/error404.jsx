import React from 'react';
import {Link} from 'react-router-dom';

//CSS
import './error404.css';

function Error404(){
    return(
        <div className="error404">
            <p className="title">Oops!</p>

            <img src="img/error404.png" alt="Bear"/>

            <p>It seems that you have lost.</p>

            <Link className="button" to="/">Get me out of here!</Link>
        </div>
    );
}

export default Error404;