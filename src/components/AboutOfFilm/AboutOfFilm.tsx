import React, {FC} from 'react';
import {Rating} from "./Rating";
import {IAboutMovie, IGenre} from "../../interfaces";
import './aboutsOfFilm.css'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks";

interface IProps {
    movie: IAboutMovie<IGenre[]>
}

const AboutOfFilm: FC<IProps> = ({movie}) => {
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={'wrapper'}>
            <div className={'wrapImg'}>
                <img src={movie.poster_path && `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt={movie.original_title}/>
            </div>
            <div className={'desc'}>
                <h4 className={`${mode ===2 ?'dark':'light'}`}>{movie?.original_title}</h4>
                <div className={'flex'}>
                    <h6 className={`${mode===2?'dark':'light'}`}>Genres:</h6>
                    {
                        movie?.genres && movie.genres.map(value => <Link className={'genresLink'} to={`/${value.id}`} key={value.id}>{value.name}</Link>)
                    }
                </div>
                <Rating key={movie.id} vote_average={movie.vote_average}/>
                <p className={`${mode === 2 ? 'dark' : 'light'}`}>{movie?.status}: {movie.release_date}</p>
                <p className={`${mode === 2 ? 'dark' : 'light'}`}>Budget: {movie.budget}$</p>
                <div className={'flex'}>
                    <h6 className={`${mode===2 ? 'dark': 'light'}`}>Country:</h6>
                    {
                        movie.production_countries && movie.production_countries.map((value, index) => <p className={`${mode===2 ? 'dark': 'light'}`} key={index}>{value.name}</p>)
                    }
                </div>


                <p className={`${mode === 2 ? 'dark' : 'light'}`}> {movie.overview}</p>
            </div>
        </div>
    );
};

export {AboutOfFilm};