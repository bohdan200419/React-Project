import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import './allFilm.css'
import {useAppSelector} from "../../hooks";

interface IProps {
    results: IMovie | null

}

const AllFilm: FC<IProps> = ({results}) => {
    const {mode} = useAppSelector(state => state.mode)
    const navigate = useNavigate();
    const aboutFilm = () => {
        navigate({
            pathname: '/aboutOfFilm',
            search: `?id=${results?.id}`
        })
    }
    const hasPhoto = results && results.poster_path
    const photo = hasPhoto ? `https://image.tmdb.org/t/p/original${results?.poster_path}` : 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png'
    return (
        <div className={'wrapperMovie'} onClick={aboutFilm}>
            <div>
                <img src={photo} alt={results?.original_title}/>
                <h4 className={`titleFilm ${mode === 2 ? 'dark' : 'light'}`}>{results?.original_title}</h4>
            </div>
        </div>
    );
};

export {AllFilm};