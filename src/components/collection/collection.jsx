import React from 'react';
import Axios from 'axios';

//ApiConfigurtaion
import {API} from '../../config/config';

import './collection.css';

export default class Collection extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collectionId: props.location.pathname[props.location.pathname.length - 1]
        }

        this.getInfo();
    }

    getInfo(){
        Axios.get(`${API.baseUrl}/collections/${this.state.collectionId}?client_id=${API.key}`).then(
            result => {
                console.log(result);

                this.getPhotos();
            }
        ).catch(error => console.log(error));
    }

    getPhotos(){
        Axios.get(`${API.baseUrl}/collections/${this.state.collectionId}/photos?client_id=${API.key}`)
        .then(result => {
            let photos = [];

            result.data.map(photo => {
                console.log(photo);

                photos.push(
                    <img className="photo" src={photo.urls.regular} alt="11"/>
                );
            });

            this.setState({
                photos: photos
            });
        }).catch(error => console.log(error));
    }

    render(){
        return(
            <div className="collection">
                <div className="photos">
                    {this.state.photos}
                </div>
            </div>
        );
    }
}