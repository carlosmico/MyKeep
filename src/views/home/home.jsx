import React from 'react';
import { NavLink } from 'react-router-dom';
import { API } from '../../config/config';
import Navigation from '../../components/navigation/navigation';

//CSS
import './home.css';
import Axios from 'axios';
import Photo from '../photo/photo';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        const lastPhotosUrl = `${API.baseUrl}/photos?client_id=${API.key}&per_page=50`;

        const navigation = <Navigation url={lastPhotosUrl} navAction={this.searchPhotos} maxPage={100}/>;

        this.state = {
            search: true,
            navigation: navigation
        }

        this.searchPhotos = this.searchPhotos.bind(this);
    }

    handleChange(event) {
        if (event.key === "Enter") {
            let query = event.target.value;

            let url = `${API.baseUrl}/search/photos?client_id=${API.key}&query=${query}&per_page=50`;

            let navigation = <Navigation url={url} navAction={this.searchPhotos} maxPage={100}/>;

            this.setState({
                navigation: null
            }, ()=>{
                this.setState({
                    search: true,
                    url: url,
                    navigation: navigation
                }, );
            });
        }
    }

    searchPhotos = (url) => {
        Axios.get(url).then(
            result => {
                let photos = [];

                console.log(result)

                if(result.data.results){
                    result.data.results.forEach(photo => {
                        console.log(photo)
                        photos.push(
                            <NavLink className="photo" to={`/photo/${photo.id}`} style={{'backgroundImage': `url(${photo.urls.regular})`}} key={photo.id}>
                            </NavLink >
                        );
                    });
                }else{
                    result.data.forEach(photo => {
                        console.log(photo)
                        photos.push(
                            <NavLink className="photo" to={`/photo/${photo.id}`} style={{'backgroundImage': `url(${photo.urls.regular})`}} key={photo.id}>
                            </NavLink >
                        );
                    });
                }

                console.log(photos)

                this.setState({
                    search: true,
                    results: result.data.total,
                    pages: result.data.total_pages,
                    photos: photos
                });
            }
        ).catch(
            err => console.log(err)
        );
    }

    render() {
        return (
            <div className="home">
                <div className="searchBar">
                    <h1><span className="W">W</span><span className="P">P</span><span className="W">W</span></h1>
                    <h2>You just have to write and we find your wallpaper.</h2>
                    <input type="text" className=" searchBar" placeholder="Discover new photos..." onKeyUp={this.handleChange.bind(this)} />
                </div>

                {this.state.search ?
                    <div className="resultsInfo">
                        {/* {this.state.navigation} */}
                        {/* <p>Results found: {this.state.results}</p> */}
                        <div className="photosResult">
                            {this.state.photos}
                        </div>
                        {this.state.navigation}
                    </div>
                    : ""
                }
            </div>
        );
    }
}