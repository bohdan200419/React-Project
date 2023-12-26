import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";

import {GenreBadge} from "./GenreBadge";
import {genreActions} from "../../redux";
import {Outlet} from "react-router-dom";
import './genres.css'


const GenreBadges :FC = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
    dispatch(genreActions.getAllGenres())
    },[dispatch])
    const {genres} = useAppSelector(state => state.genre);

    return (
        <div className={'genresWrap'}>
            {
                genres.map(value => <GenreBadge key={value.id} genre={value}/>)
            }
            <Outlet/>
        </div>
    );
};

export {GenreBadges};
//rygeryg