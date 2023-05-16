import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import './allFilm.css'

interface IProps{
    results:IMovie

}
const AllFilm:FC<IProps> = ({results}) => {
    const navigate = useNavigate();

    const aboutFilm = () => {
        navigate({
            pathname:'/aboutOfFilm',
            search: `?id=${results?.id}`
        })
    }

    return (
    <div className={'wrapperMovie'} onClick={aboutFilm}>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${results.poster_path}`} alt={results.original_title}/>
            <h4 className={'titleFilm'}>{results.original_title}</h4>
        </div>
    </div>
    );
};

export {AllFilm};