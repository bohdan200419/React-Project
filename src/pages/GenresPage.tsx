import React from 'react';
import {Genres} from "../components/Genres";
import './genresPage.css'

const GenresPage = () => {
    return (
        <div className={'genresWrap'}>
            <Genres/>
        </div>
    );
};

export {GenresPage};