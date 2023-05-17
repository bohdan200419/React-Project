import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {searchActions} from "../redux";
import {AllFilm} from "../components";
import './AllFilmsPage.css'

const FindedMoviesPage = () => {
    const {movies, findedMovies, page, name, maxPage} = useAppSelector(state => state.searchFilm)
    const dispatch = useAppDispatch();

    useEffect(() => {
        movies && movies.map(value => dispatch(searchActions.findedMovies(value.id.toString())))
    }, [dispatch, movies, page])

    const inc = () => {
        dispatch(searchActions.inc());
        dispatch(searchActions.searchFilm({name: name, page: page.toString()}))
    }
    const dec = () => {
        dispatch(searchActions.dec())
        dispatch(searchActions.searchFilm({name: name, page: page.toString()}))
    }
    return (

        <div className={'bg'}>
            <div className={'wrapperAllMovies'}>
                {
                    findedMovies.map((value, index) => <AllFilm results={value} key={value.id}/>)
                }
            </div>
            <div className='pagination'>
                <button className={'button'} disabled={page <= 1} onClick={dec}>Prev Page</button>
                {
                    <p className={'count'}>{page}</p>
                }
                <button className={'button'} disabled={+page === +maxPage} onClick={inc}>Next Page</button>
            </div>

        </div>
    );
};


export {FindedMoviesPage};