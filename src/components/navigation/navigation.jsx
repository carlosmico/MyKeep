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
            url:props.url,
            action: props.navAction,
            actualPage: 1,
            maxPage: 100
        }

        this.first = this.first.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.last = this.last.bind(this);
    }

    componentDidMount(){
        this.first();
    }

    first(){
        console.log("sodkoaskodoas");
        
        let actualPage = 1;

        this.setState({
            actualPage : actualPage,
            url: `${this.state.url}&page=${actualPage}`
        }, ()=>this.state.action(this.state.url));
    }

    previous(){
        let actualPage = this.state.actualPage;

        if(actualPage !== 1){
            actualPage--;

            this.setState({
                actualPage: actualPage,
                url: `${this.state.url}&page=${actualPage}`
            }, ()=>this.state.action(this.state.url));
        }
    }

    next(){
        let actualPage = this.state.actualPage;

        if(actualPage !== this.state.maxPage){
            actualPage++;

            this.setState({
                actualPage: actualPage,
                url: `${this.state.url}&page=${actualPage}`
            }, ()=>this.state.action(this.state.url));
        }
    }

    last(){
        let actualPage = this.state.maxPage;

        this.setState({
            actualPage : actualPage,
            url: `${this.state.url}&page=${actualPage}`
        }, ()=>this.state.action(this.state.url));
    }

    render(){
        return(
            <div className="navigation">
                <i className="fas fa-fast-backward arrow" onClick={this.first}></i>
                <i className="fas fa-step-backward arrow" onClick={this.previous}></i>
                <span className="actualPage">{this.state.actualPage}</span>
                <i className="fas fa-step-forward arrow" onClick={this.next}></i>
                <i className="fas fa-fast-forward arrow" onClick={this.last}></i>
            </div>
        );
    }
}