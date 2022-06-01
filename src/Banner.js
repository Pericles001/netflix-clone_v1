import React, {useEffect, useState} from 'react';
import axios from "./axios";
import requests from "./requests";
import {base_url} from "./Row";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)
    return (
        <header className="banner" style={{backgroundSize: "cover", backgroundImage: `url("${base_url}${movie?.backdrop_path}")`, backgroundPosition: "center center"}}>
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button"> My List</button>
                </div>
                {/*background image*/}
                {/*title*/}
                {/*div with 2 buttons*/}
                {/*description*/}
            </div>
"
        </header>
    );
}

export default Banner;