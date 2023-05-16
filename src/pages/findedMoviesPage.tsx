import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {searchActions} from "../redux";
import {AllFilm} from "../components";

const FindedMoviesPage = () => {
    const dispatch = useAppDispatch();
    const {movies,findedMovies} = useAppSelector(state => state.searchFilm)
    useEffect(()=>{
        movies&&movies.map(value => dispatch(searchActions.findedMovies(value.id.toString())))
    },[dispatch])
    return (
        <div>
            {
                findedMovies&&findedMovies.map(value => <AllFilm key={value.id} results={value.original_title} />)
            }
        </div>
    );
};

export {FindedMoviesPage};