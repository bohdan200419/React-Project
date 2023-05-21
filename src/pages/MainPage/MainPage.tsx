import React, {useEffect} from 'react';

import './mainPage.css'
import '../../mode.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions, searchActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {Sliders} from "../../components";


const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, reset, handleSubmit} = useForm();
    const {page} = useAppSelector(state => state.searchFilm)
    const {mode} = useAppSelector(state => state.mode)
    const {popular} = useAppSelector(state => state.movie)

    const find: SubmitHandler<FieldValues> = (data) => {
        dispatch(searchActions.clearMovies())
        dispatch(searchActions.searchFilm({name: data.movie, page: page.toString()}))
        dispatch(searchActions.setName(data.movie))
        dispatch(searchActions.resetPage())
        navigate('/findedMovies')
        reset()
    };
    useEffect(()=>{
        dispatch(movieActions.getPopular())
    },[dispatch])


    return (
        <div className={`mainPageWrapper ${mode === 2 ? 'bg-dark' : 'bg-light'}`}>
            <h4 className={` title ${mode===2?'dark':'light'}`}>Explore the world of cinema with our search form!</h4>
            <div>
                <form className={'searchForm'} onSubmit={handleSubmit(find)}>
                    <input className={`input ${mode === 2 ? 'input-dark' : 'input-light'}`}
                           type="text" {...register('movie')} placeholder={'Find a movie'}/>
                    <button className={`formBtn ${mode === 2 ? 'formBtn-dark' : 'formBtn-light'}`}><FontAwesomeIcon
                        className={'magnifying-glass'} icon={faSearch}/>
                    </button>
                </form>
            </div>
            <h4 className={`desc-slider ${mode===2?'dark':'light'}`}>Discover the highest-rated films with our top-rated movie slider!</h4>
            <Sliders results={popular}/>
        </div>
    );
};

export {MainPage};