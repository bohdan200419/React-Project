import React from 'react';
import {Link} from "react-router-dom";

import css from './header.module.css'
import logo from './logo.png'
import user from './user.png'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>{<img src={logo} alt="Movies"/>}</div>
            <div className={css.navigation}>
                <Link to={'genre'}>Genre</Link>
                <Link to={'allfilms'}>All Films</Link>
            </div>
            <div className={css.user}><img src={user} alt=""/></div>
        </div>
    );
};

export {Header};