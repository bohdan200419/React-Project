import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";

import {aboutOfFilmActions} from "../../redux";
import './MoviesInfo.css'
import '../../mode.css'
import {MovieInfo} from "./MovieInfo";
import {Loading} from "../Loading";


const MoviesListCard: FC = () => {
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
                    movie && movie.map(value => <MovieInfo key={value.id} movie={value}/>)
            }
        </div>

    );
};

export {MoviesListCard};