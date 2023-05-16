import React from 'react';
import {FC} from "react";
import {Link} from "react-router-dom";

import {IGenre} from "../../interfaces";
import './genres.css'


interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {


    return (
        <div className={'genreWrap'}>
            <Link to={`${genre.id.toString()}`}>{genre.name}</Link>
        </div>
    );
}

export {Genre};