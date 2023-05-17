import React from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";
import {AllFilms} from "../components";
import './AllFilmsPage.css'


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
        <div className={'mainWrapper'}>
            <AllFilms/>
            <div className={'pagination'}>
                <button className={'button'} disabled={page<=1} onClick={dec}>Prev Page</button>
                {<p className={'count'}>{page}</p>}
                <button className={'button'}  onClick={inc}>Next Page</button>
            </div>
        </div>
    );
};

export {AllFilmsPage};