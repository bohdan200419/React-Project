import React from 'react';
import {FC} from "react";
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    return (
        <div>
            <p>{genre.id}</p>
            <Link to={'gfgf'}>{genre.name}</Link>
        </div>
    );
};

export {Genre};