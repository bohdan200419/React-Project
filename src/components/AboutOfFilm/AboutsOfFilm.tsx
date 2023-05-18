import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {aboutOfFilmActions} from "../../redux";
import  './aboutsOfFilm.css'
import '../../mode.css'
import {AboutOfFilm} from "./AboutOfFilm";






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
        <div>
            {
               movie && movie.map(value => <AboutOfFilm key={value.id} movie={value}/> )
            }
        </div>

    );
};

export {AboutsOfFilm};