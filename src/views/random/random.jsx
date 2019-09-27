import React from 'react';
import Axios from 'axios';

//API CONFIGURATION
import { API } from '../../config/config';

//CSS
import "./random.css";

export default class Random extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: `${API.baseUrl}/photos/random?client_id=${API.key}`
        };

        this.getRandomWallpaper();
    }

    getRandomWallpaper() {
        Axios.get(`${API.baseUrl}/collections?client_id=${API.key}`).then(console.log).catch(console.log);

        Axios.get(this.state.url).then(
            result => {
                console.log(result);

                let description = this.firstCharToUpperCase(result.data.alt_description);
                
                this.setState(
                    {
                        wallpaper: result.data.urls.regular,
                        wallpaperUrl: result.data.links.html,
                        downloadUrl: result.data.links.download,
                        statisticsUrl: `${API.baseUrl}/photos/${result.data.id}/statistics?client_id=${API.key}`,
                        altDescription: description,
                        author: result.data.user.name,
                        authorProfile: result.data.user.links.html,
                        likes: result.data.likes,
                        downloads: result.data.downloads,
                        views: result.data.views,
                        height: result.data.height,
                        width: result.data.width
                    }
                );
            }
        ).catch(error => {
            console.log(error);
            if (error) {
                this.setState({
                    error: error.response.data
                });
            }
        });
    }

    firstCharToUpperCase(word){
        let firstChar = word[0];

        firstChar = firstChar.toUpperCase();

        let wordUppered = firstChar + word.slice(1,word.length);

        return wordUppered;
    }

    render() {
        return (
            <div className="random">
                <h1 className="sectionTitle">Random Wallpaper</h1>

                {
                    this.state.error ?
                        <div class="alert alert-danger" role="alert">
                            {this.state.error}
                        </div> : ""
                }

                <div className="wallpaperSection mb-5">
                    <a href={this.state.wallpaperUrl} target="_blank">
                        <img className="wallpaper" src={this.state.wallpaper} alt={this.state.altDescription} />
                    </a>

                    <div className="wallpaperInfo">
                        <p className="description">"{this.state.altDescription}"</p>

                        <div className="likesAndViews">
                            <span className="lw likes">
                                <i className="fas fa-heart"></i>
                                {this.state.likes}
                            </span>

                            <span className="lw downloads">
                                <i className="fas fa-save"></i>
                                {this.state.downloads}
                            </span>

                            <span className="lw views">
                                <i className="fas fa-eye"></i>
                                {this.state.views}
                            </span>
                        </div>

                        <div className="dimensions">
                            Dimensions (px):

                            <div className="data">
                                <i class="fas fa-text-height"><span>{this.state.height}</span></i>
                                <i class="fas fa-text-width"><span>{this.state.width}</span></i>
                            </div>
                        </div>

                        <p className="author">Author: <a href={this.state.authorProfile} target="_blank">{this.state.author}</a></p>

                        <a className="downloadButton" href={this.state.wallpaper}download>Download</a>
                    </div>
                </div>
            </div>
        );
    }
}