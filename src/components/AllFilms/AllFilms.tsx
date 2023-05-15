import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";

import { AllFilm } from "./AllFilm";
import css from './allFilm.module.css'
import { movieActions } from "../../redux";

const AllFilms = () => {
    const dispatch = useAppDispatch();
    const { page, movies } = useAppSelector(state => state.movie);


    useEffect(() => {
        dispatch(movieActions.getAllMoviesAsync(page));
    }, [dispatch, page]);


    return (
        <div className={css.wrapperAllMovies}>

            {
                movies && movies.map(value => <AllFilm key={value.id} results={value} />)
            }
        </div>
    );
};

export { AllFilms };