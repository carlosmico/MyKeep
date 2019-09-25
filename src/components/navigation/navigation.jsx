import React from 'react';

//Libraries
import AXIOS from 'axios';

//API
import {API} from '../../config/config';

//CSS
import './navigation.css';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            actualPage: 1,
            maxPage: 100
        }
    }

    render(){
        return(
            <div className="navigation">
                <i class="fas fa-arrow-left"></i>
                <span className="actualPage">{this.state.actualPage}</span>
                <i class="fas fa-arrow-right"></i>
            </div>
        );
    }
}