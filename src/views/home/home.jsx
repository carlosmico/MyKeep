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

        const lastPhotosUrl = `${API.baseUrl}/photos?client_id=${API.key}&per_page=100`;

        const navigation = <Navigation url={lastPhotosUrl} navAction={this.searchPhotos} maxPage={100}/>;

        this.state = {
            navigation: navigation
        }

        this.searchPhotos = this.searchPhotos.bind(this);
    }

    handleChange(event) {
        if (event.key === "Enter") {
            let query = event.target.value;

            let url = `${API.baseUrl}/search/photos?client_id=${API.key}&query=${query}&per_page=100`;

            let navigation = <Navigation url={url} navAction={this.searchPhotos} maxPage={100}/>;

            this.setState({
                navigation: null
            }, ()=>{
                this.setState({
                    url: url,
                    navigation: navigation
                }, );
            });
        }
    }

    searchPhotos(url) {
        Axios.get(url).then(
            result => {
                let photos = [];

                console.log(result);

                result.data.results.forEach(photo => {
                    photos.push(
                        <NavLink className="photo" to={`/photo/${photo.id}`} style={{'backgroundImage': `url(${photo.urls.regular})`}} key={photo.id}>
                        </NavLink >
                    );
                });

                this.setState({
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
                {console.log(1)}
                <div className="searchBar">
                    <input type="text" className=" searchBar" placeholder="Discover new photos..." onKeyUp={this.handleChange.bind(this)} />
                </div>

                {true ?
                    <div className="resultsInfo">
                        
                        {/* <Navigation url={this.state.url} navAction={this.searchPhotos} maxPage={this.state.pages} /> */}
                        <p>Results found: {this.state.results}</p>
                        {this.state.navigation}
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