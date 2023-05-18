import React from 'react';
import { Genres } from '../components';

import './genresPage.css'
import {useAppSelector} from "../hooks";

const GenresPage = () => {
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={`genresWrap ${mode===2 ?'genres-dark':'genres-light'}`}>
            <Genres/>
        </div>
    );
};

export {GenresPage};