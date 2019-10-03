import React from 'react';

//Libraries
import AXIOS from 'axios';

//API
import {API} from '../../config/config';

//Components
import Navigation from '../../components/navigation/navigation';
import {Link} from 'react-router-dom';

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
                        <Link className="collection" to={`/collection/${collection.id}`}>
                            <img className="coverPhoto" src={collection.cover_photo.urls.small} alt=""/>

                            <div className="collectionData">
                                <span className="title">{collection.title}</span>
                                <span><i class="fas fa-camera"></i>{collection.total_photos}</span>
                            </div>
                        </Link>
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

                {
                    this.state.error ? 
                    <div class="alert alert-danger" role="alert">
                        {this.state.error}
                    </div> : ""
                }

                <div className="collections">
                    {this.state.collectionsElement}
                </div>

                <Navigation url={this.state.collectionsUrl} navAction={this.getCollections}/>
            </div>
        );
    }
}