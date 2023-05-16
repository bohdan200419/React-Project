import React, {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";

import { AllFilm } from "./AllFilm";
import './allFilm.css'
import { movieActions } from "../../redux";


const AllFilms:FC = () => {
    const dispatch = useAppDispatch();
    const { page, movies } = useAppSelector(state => state.movie);


    useEffect(() => {
        dispatch(movieActions.getAllMoviesAsync(page));
    }, [dispatch, page]);


    return (
        <div className={'wrapperAllMovies'}>

            {
                movies && movies.map(value => <AllFilm key={value.id} results={value} />)
            }
        </div>
    );
};

export { AllFilms };