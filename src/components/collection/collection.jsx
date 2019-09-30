import React from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';

//ApiConfigurtaion
import {API} from '../../config/config';

import './collection.css';

export default class Collection extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
        
        this.state = {
            collectionId: props.location.pathname.substring(12, props.location.pathname.length)
        }

        console.log(this.state);

        this.getInfo();
    }

    getInfo(){
        Axios.get(`${API.baseUrl}/collections/${this.state.collectionId}?client_id=${API.key}`).then(
            result => {
                console.log(result);

                this.setState({
                    title: result.data.title,
                    description: result.data.description,
                    totalPhotos: result.data.total_photos,
                    tags: result.data.tags,
                    unsplashUrl: result.data.links["html"]
                });

                console.log(this.state)

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
                    <NavLink to={`/photo/${photo.id}`} className="photoContainer" onMouseOver={this.showMoreInfo} onMouseLeave={this.hideMoreInfo}>
                        <div className="photo moreInfo hide">
                            <div className="moreInfoContent">
                                <p>View photo</p>
                                <p><i class="fas fa-plus-circle"></i></p>
                            </div>
                        </div>
                        <img className="photo" src={photo.urls.regular} alt="11"/>
                    </NavLink>
                );
            });

            this.setState({
                photos: photos
            });
        }).catch(error => console.log(error));
    }

    showMoreInfo(event){
        let moreInfo = event.target.querySelector('.moreInfo');
        
        if(moreInfo){
            moreInfo.classList.remove("hide");
            moreInfo.classList.add("show");
        }
    }

    hideMoreInfo(event){
        let moreInfo = event.target.querySelector('.moreInfo');
        
        if(moreInfo){
            moreInfo.classList.remove("show");
            moreInfo.classList.add("hide");
        }
    }

    render(){
        return(
            <div className="collection">
                <div className="collectionInfo">
                    <h1>{this.state.title}</h1>

                    <p className="description">"{this.state.description}"</p>

                    <p>Total photos: {this.state.totalPhotos}</p>
                </div>

                <div className="photos">
                    {this.state.photos}
                </div>

                <p>See the collection on <a href={this.state.unsplashUrl} target="_blank">Unsplash</a></p>
            </div>
        );
    }
}