import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import './index.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    results: IMovie
}

const Slidering: FC<IProps> = ({results}) => {
    const navigate = useNavigate()
    const navigateToFilm = () => {
        navigate({
            pathname: '/aboutOfFilm',
            search: `?id=${results.id}`
        })
    }
    return (
        <div className={'imgFlex'}>
            <img onClick={navigateToFilm} className={'imgHover'}
                 src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={results.title}/>
        </div>
    );
};

export {Slidering};