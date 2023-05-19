import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {genreActions} from "../redux";
import {AllFilm,Loading} from "../components";
import './AllFilmsPage.css'
import '../components/AllFilms/allFilm.css'
import '../mode.css'


const MoviesByGenre = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {moviesByGenre, page, loading} = useAppSelector(state => state.genre);
    const {mode} = useAppSelector(state => state.mode)

    const {pathname} = location
    const id = pathname.split('/').splice(1, 2).toString()

    useEffect(() => {
        dispatch(genreActions.findByGenre({id, page}))
    }, [dispatch, pathname, page])
    return (
        <>
            {
                loading?<Loading loading={loading}/>:
                    <div className={`mainWrapper ${mode === 2 ? 'bg-dark' : 'bg-light'}`}>
                        <div className={'wrapperAllMovies'}>
                            {
                                moviesByGenre.map(value => <AllFilm results={value} key={value.id}/>)
                            }
                        </div>
                        <div className={'pagination'}>
                            <button className={'button'} disabled={page <= 1}
                                    onClick={() => dispatch(genreActions.dec())}>Prev
                                Page
                            </button>
                            <p className={`${mode === 2 ? 'dark' : 'light'}`}>{page}</p>
                            <button className={'button'} onClick={() => dispatch(genreActions.inc())}>Next Page</button>
                        </div>
                    </div>
            }
        </>
    );
};

export {MoviesByGenre};