import React from 'react';
import {Link} from 'react-router-dom';

//CSS
import './error404.css';

function Error404(){
    return(
        <div className="error404">
            <p className="title">Oops!</p>

            <img src="https://png.pngtree.com/element_origin_min_pic/17/08/09/900647a0b42fca2976857411bbb7d78a.jpg" alt=""/>

            <p>It seems that you have lost.</p>

            <Link className="button" to="/">Get me out of here!</Link>
        </div>
    );
}

export default Error404;