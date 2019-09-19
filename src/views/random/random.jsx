import React from 'react';
import Axios from 'axios';

//API CONFIGURATION
import {API} from '../../config/config';

//CSS


export default class Random extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            url : `${API.baseUrl}/photos/random?client_id=${API.key}`,
            wallpaper: ""
        };

        this.getRandomWallpaper();
    }

    getRandomWallpaper(){
        Axios.get(this.state.url).then(
            result => {
                console.log(result);
                this.setState(
                    {
                        wallpaper: result.data.urls.regular,
                        altDescription: result.data.alt_description
                    }
                )
            }
        ).catch(console.log);
    }

    render() {
        return(
            <div className="random">
                <h1>Random Wallpaper</h1>

                <img className="wallpaper" src={this.state.wallpaper} alt={this.state.altDescription}/>

                <p>Powered by: Unsplash</p>
            </div>
        );
    }
}