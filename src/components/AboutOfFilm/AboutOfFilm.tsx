import React, {FC} from 'react';
import {Rating} from "./Rating";
import {IAboutMovie, IGenre} from "../../interfaces";
import './aboutsOfFilm.css'

interface IProps{
    movie:IAboutMovie<IGenre[]>
}
const AboutOfFilm: FC<IProps> = ({movie}) => {
    return (
        <div className={'wrapper'}>
            <div className={'wrapImg'}>
                <img src={movie.poster_path&&`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title}/>
            </div>
            <div className={'desc'}>
                <h4>{movie?.original_title}</h4>
                <div className={'flex'}>
                    <h6>Genres:</h6>
                    {
                        movie?.genres && movie.genres.map(value => <p key={value.id}>{value.name}</p>)
                    }
                </div>
                <Rating key={movie.id} vote_average = {movie.vote_average}/>
                <p>{movie?.status}: {movie.release_date}</p>
                <p>Budget: {movie.budget}$</p>
                <div className={'flex'}>
                    <h6>Country:</h6>
                    {
                        movie.production_countries && movie.production_countries.map((value, index) =>  <p key={index}>{value.name}</p>)
                    }
                </div>


                <p> {movie.overview}</p>
            </div>
        </div>
    );
};

export {AboutOfFilm};