import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {aboutOfFilmActions} from "../../redux";
import  './aboutsOfFilm.css'
import {Rating} from "./Rating";



const AboutsOfFilm: FC = () => {
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.aboutOfFilm)
    const url = window.location.href
    const params = new URLSearchParams(new URL(url).search)
    const id = params.get('id')
    useEffect(() => {
        if (id != null) {
            dispatch(aboutOfFilmActions.getMovieAsync(id))
        }
    }, [dispatch, id])


    return (
        <div className={'wrapper'}>
            <div className={'wrapImg'}>
                <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.original_title}/>
            </div>
            <div className={'desc'}>
                <h4>{movie?.original_title}</h4>
                <div className={'flex'}>
                    Genres:
                    {
                        movie?.genres && movie?.genres.map(value => <p key={value.id}>{value.name}</p>)
                    }
                </div>
                <Rating key={movie?.id} vote_average = {movie?.vote_average}/>
                <p>{movie?.status}: {movie?.release_date}</p>
                <p>Budget: {movie?.budget}$</p>
                <div className={'flex'}>
                    Country:
                    {
                       movie?.production_countries && movie?.production_countries.map((value, index) =>  <p key={index}>{value.name}</p>)
                    }
                </div>


                <p> {movie?.overview}</p>
            </div>
        </div>
    );
};

export {AboutsOfFilm};