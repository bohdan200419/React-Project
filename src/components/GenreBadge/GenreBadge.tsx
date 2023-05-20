import React from 'react';
import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";
import './genres.css'
import {useAppSelector} from "../../hooks";


interface IProps {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {mode} = useAppSelector(state => state.mode);

    return (
        <div className={`genreWrap ${mode===2? 'genre-dark':'genre-light'}`}>
                <Link to={`/${genre.id.toString()}`}>{genre.name}</Link>
        </div>
);
}

export {
    GenreBadge
};