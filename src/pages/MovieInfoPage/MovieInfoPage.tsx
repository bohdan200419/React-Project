import React from 'react';
import {MoviesListCard} from "../../components";
import './movieInfoPage.css'
import {useAppSelector} from "../../hooks";

const MovieInfoPage = () => {
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={`wrapper ${mode===2 ? 'bg-dark': 'bg-light'}`}>
            <MoviesListCard/>
        </div>
    );
};

export {MovieInfoPage};