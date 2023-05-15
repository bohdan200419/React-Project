import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {aboutOfFilmActions} from "../../redux";
import css from './aboutsOfFilm.module.css'



const AboutsOfFilm:FC = () => {
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.aboutOfFilm)
    const url = window.location.href
    const params = new URLSearchParams(new URL(url).search)
    const id = params.get('id')
    useEffect(() => {
        if (id != null) {
            dispatch(aboutOfFilmActions.getMovieAsync(id))
        }
    }, [dispatch,id])


    return (
        <div className={css.wrapper}>
            <div className={css.wrapImg}><img src={'https://image.tmdb.org/t/p/original'+`${movie?.poster_path}`} alt={movie?.original_title}/></div>
            <div>
                <p>{movie?.original_title}</p>
            </div>
        </div>
    );
};

export {AboutsOfFilm};