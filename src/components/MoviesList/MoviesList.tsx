import React, {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";

import { PosterPreview } from "./PosterPreview";
import './MoviesList.css'
import { movieActions } from "../../redux";
import {Loading} from "../Loading";


const MoviesList:FC = () => {
    const dispatch = useAppDispatch();
    const { page, movies,loading } = useAppSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getAllMoviesAsync(page));
    }, [dispatch, page]);

    return (
        <div className={'wrapperAllMovies'}>

            {
                loading?<Loading loading={loading}/>:
                movies && movies.map(value => <PosterPreview key={value.id} results={value} />)
            }
        </div>
    );
};

export { MoviesList };