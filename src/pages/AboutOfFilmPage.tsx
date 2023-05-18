import React from 'react';
import {AboutsOfFilm} from "../components";
import './aboutOfFilm.css'
import {useAppSelector} from "../hooks";

const AboutOfFilmPage = () => {
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={`wrapper ${mode===2 ? 'bg-dark': 'bg-light'}`}>
            <AboutsOfFilm/>
        </div>
    );
};

export {AboutOfFilmPage};