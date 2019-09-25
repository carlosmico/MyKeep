import React from 'react';

//Libraries
import AXIOS from 'axios';

//API
import {API} from '../../config/config';

//CSS
import './Collections.css';
import Axios from 'axios';
import { throwStatement } from '@babel/types';

export default class Collections extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collectionsUrl : `${API.baseUrl}/collections?page=100&client_id=${API.key}`,
            actualPage: 1,
            maxPage: 100
        }

        this.getCollections();
    }

    getCollections(){
        Axios.get(this.state.collectionsUrl).then(
            result => {
                console.log(result);

                let collectionsElement = [];

                result.data.forEach(collection => {
                    collectionsElement.push(
                        <div className="collection">
                            <p className="title">{collection.title}</p>

                            <img className="coverPhoto" src={collection.cover_photo.urls.small} alt=""/>
                        </div>
                    );
                });

                this.setState({
                    collections: result.data,
                    collectionsElement: collectionsElement
                });
            }
        ).catch(console.log);
    }

    render(){
        return(
            <div className="collectionsView">
                <h1 className="title">COLLECTIONS</h1>

                <div className="navigation">
                    <i class="fas fa-arrow-left"></i>
                    <span className="actualPage">{this.state.actualPage}</span>
                    <i class="fas fa-arrow-right"></i>
                </div>

                <div className="collections">
                    {this.state.collectionsElement}
                </div>
            </div>
        );
    }
}