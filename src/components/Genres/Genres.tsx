import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "./Genre";
import {genreActions} from "../../redux";
import {Outlet} from "react-router-dom";


const Genres :FC = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
    dispatch(genreActions.getAllGenres())
    },[dispatch])
    const {genres} = useAppSelector(state => state.genre);

    return (
        <div>
            {

                genres.map(value => <Genre key={value.id} genre={value}/>)
            }
            <Outlet/>
        </div>
    );
};

export {Genres};