import {Link} from "react-router-dom";
import React, {FC, useEffect} from 'react';

import {IAboutMovie, IGenre} from "../../interfaces";
import './MoviesInfo.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {aboutOfFilmActions} from "../../redux";
import {Video} from "../Videos";
import {StarsRating} from "../StarsRating";


interface IProps {
    movie: IAboutMovie<IGenre[]>
}

const MovieInfo: FC<IProps> = ({movie}) => {

    const {mode} = useAppSelector(state => state.mode)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutOfFilmActions.getVideo(movie.id.toString()))
    }, [dispatch,movie.id])

    return (
        <div className={'mainWrapper'}>
            <div className={'wrapper'}>
                <div className={'wrapImg'}>
                    <img src={movie.poster_path? `https://image.tmdb.org/t/p/original${movie.poster_path}`: 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png'}
                         alt={movie.original_title}/>
                </div>
                <div className={'desc'}>
                    <h4 className={`${mode === 2 ? 'dark' : 'light'}`}>{movie?.original_title}</h4>
                    <div className={'flex'}>
                        <h6 className={`${mode === 2 ? 'dark' : 'light'}`}>Genres:</h6>
                        {
                            movie?.genres && movie.genres.map(value => <Link className={'genresLink'} to={`/${value.id}`}
                                                                             key={value.id}>{value.name}</Link>)
                        }
                    </div>
                    <StarsRating key={movie.id} vote_average={movie.vote_average}/>
                    <p className={`${mode === 2 ? 'dark' : 'light'}`}>{movie?.status}: {movie.release_date}</p>
                    <p className={`${mode === 2 ? 'dark' : 'light'}`}>Budget: {movie.budget}$</p>
                    <div className={'flex'}>
                        <h6 className={`${mode === 2 ? 'dark' : 'light'}`}>Country:</h6>
                        {
                            movie.production_countries && movie.production_countries.map((value, index) => <p
                                className={`${mode === 2 ? 'dark' : 'light'}`} key={index}>{value.name}</p>)
                        }
                    </div>
                    <p className={`${mode === 2 ? 'dark' : 'light'}`}> {movie.overview}</p>
                </div>
            </div>

            <Video/>
        </div>
    );
};

export {MovieInfo};