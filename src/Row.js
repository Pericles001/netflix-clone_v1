import React, {useEffect, useState} from "react";
import axios from './axios';
import './Row.css'

export const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //Code snippet running on conditional statement
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;