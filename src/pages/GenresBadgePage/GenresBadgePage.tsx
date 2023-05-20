import React from 'react';
import { GenreBadges } from '../../components';

import './genresPage.css'
import {useAppSelector} from "../../hooks";

const GenresBadgePage = () => {
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={`genresWrap ${mode===2 ?'genres-dark':'genres-light'}`}>
            <GenreBadges/>
        </div>
    );
};

export {GenresBadgePage};