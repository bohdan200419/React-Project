import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Genre} from "./Genre";
import {genreActions} from "../../redux";


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
        </div>
    );
};

export {Genres};