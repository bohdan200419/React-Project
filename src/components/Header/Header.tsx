import React from 'react';
import {Link} from "react-router-dom";

import './header.css'
import logo from './logo.png'
import user from './userr.webp'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {modeActions} from "../../redux";

const Header = () => {
    const dispatch = useAppDispatch();
    const {mode} = useAppSelector(state => state.mode);
    const modeLight = () => {
        dispatch(modeActions.modeLight())
    }
    const modeDark=()=>{
        dispatch(modeActions.modeDark())
    }
    return (
        <header className={'header header-dark'}>
            <div className={'logo'}>{<img src={logo} alt="Movies"/>}</div>
            <div className={'navigation nav-light'}>
                <Link to={'/'}>Main Page</Link>
                <Link to={'genre'}>Genre</Link>
                <Link to={'allfilms'}>All Films</Link>
            </div>
            <div>
                <button onClick={mode===1?modeLight:modeDark}>{`${mode ===1?'Light':'Dark'}`}</button>
            </div>
            <div className={'user'}><img src={user} alt=""/></div>
        </header>
    );
};

export {Header};