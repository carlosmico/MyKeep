import React from 'react';

//Libraries
import AXIOS from 'axios';

//API
import {API} from '../../config/config';

//Navigation
import Navigation from '../../components/navigation/navigation';

//CSS
import './Collections.css';
import Axios from 'axios';
import { throwStatement } from '@babel/types';

export default class Collections extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collectionsUrl : `${API.baseUrl}/collections?client_id=${API.key}`,
            actualPage: 1,
            maxPage: 100
        }

        this.getCollections = this.getCollections.bind(this);
    }

    getCollections(url){
        Axios.get(url).then(
            result => {
                let collectionsElement = [];

                result.data.forEach(collection => {
                    collectionsElement.push(
                        <div className="collection">
                            <img className="coverPhoto" src={collection.cover_photo.urls.small} alt=""/>

                            <p className="title">{collection.title}</p>
                        </div>
                    );
                });

                this.setState({
                    collections: result.data,
                    collectionsElement: collectionsElement
                });
            }
        ).catch(
            error => this.setState({
                error: error.response.data
            })
        );
    }

    render(){
        return(
            <div className="collectionsView">
                <h1 className="title">COLLECTIONS</h1>

                <Navigation url={this.state.collectionsUrl} navAction={this.getCollections}/>

                {
                    this.state.error ? 
                    <div class="alert alert-danger" role="alert">
                        {this.state.error}
                    </div> : ""
                }

                <div className="collections">
                    {this.state.collectionsElement}
                </div>
            </div>
        );
    }
}