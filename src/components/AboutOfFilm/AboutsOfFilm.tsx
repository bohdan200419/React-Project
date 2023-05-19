import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {aboutOfFilmActions} from "../../redux";
import './aboutsOfFilm.css'
import '../../mode.css'
import {AboutOfFilm} from "./AboutOfFilm";
import {Loading} from "../Loading";


const AboutsOfFilm: FC = () => {
    const dispatch = useAppDispatch();

    const {movie, loading} = useAppSelector(state => state.aboutOfFilm)

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
                loading ? <Loading loading={loading}/> :
                    movie && movie.map(value => <AboutOfFilm key={value.id} movie={value}/>)
            }
        </div>

    );
};

export {AboutsOfFilm};