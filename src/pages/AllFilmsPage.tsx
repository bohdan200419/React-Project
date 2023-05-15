import React from 'react';
import {AllFilms} from "../components/AllFilms";
import css from './AllFilmsPage.module.css'
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux/slices/movie.slice";

const AllFilmsPage = () => {
    const {page} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    const inc = () => {
        dispatch(movieActions.inc())
    }
    const dec = () => {
        dispatch(movieActions.dec())
    }

    return (
        <div>
            <AllFilms/>
            <div className={css.pagination}>
                <button className={css.button} disabled={page<=1} onClick={dec}>Prev Page</button>
                {page}
                <button className={css.button}  onClick={inc}>Next page Page</button>
            </div>
        </div>
    );
};

export {AllFilmsPage};