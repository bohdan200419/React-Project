import React from 'react';

import './mainPage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks";
import {searchActions} from "../redux";
import {useNavigate} from "react-router-dom";


const MainPage = () => {
    const navigate = useNavigate();
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.searchFilm)


    const find: SubmitHandler<FieldValues> = (data) => {
        dispatch(searchActions.clearMovies())
        dispatch(searchActions.searchFilm({name: data.movie, page: page.toString()}))
        dispatch(searchActions.setName(data.movie))
        dispatch(searchActions.resetPage())
        navigate('/findedMovies')
        reset()
    };


    return (
        <div className={'mainPageWrapper'}>
            <div>
                <form className={'searchForm'} onSubmit={handleSubmit(find)}>
                    <input className={'input'} type="text" {...register('movie')} placeholder={'Find a movie'}/>
                    <button className={'formBtn'}><FontAwesomeIcon className={'magnifying-glass'} icon={faSearch}/>
                    </button>
                </form>
            </div>

        </div>
    );
};

export {MainPage};