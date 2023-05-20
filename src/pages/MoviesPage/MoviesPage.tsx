import React from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MoviesList} from "../../components";
import './MoviesPage.css'
import '../../mode.css'


const MoviesPage = () => {
    const {page,loading} = useAppSelector(state => state.movie);
    const {mode} = useAppSelector(state => state.mode)
    const dispatch = useAppDispatch();
    const inc = () => {
        dispatch(movieActions.inc())
    }
    const dec = () => {
        dispatch(movieActions.dec())
    }


    return (


                <div className={` ${mode === 2 ? 'bg-dark' : 'bg-light'}`}>
                    <MoviesList/>
                    {
                        loading?<></>:
                            <div className={'pagination'}>
                                <button className={'button'} disabled={page <= 1} onClick={dec}>Prev Page</button>
                                {<p className={`${mode === 2 ? 'dark' : 'light'}`}>{page}</p>}
                                <button className={`button ${mode === 2 ? 'button-dark' : 'button-light'}`} onClick={inc}>Next
                                    Page
                                </button>
                            </div>
                    }
                </div>
    );


};

export {MoviesPage};