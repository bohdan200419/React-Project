import React from 'react';
import {Link} from "react-router-dom";
import css from './header.module.css'
const Header = () => {
    return (
        <div className={css.header}>
            <div>Logo</div>
            <div className={css.navigation}>
                <Link to={'genre'}>Genre</Link>
                <Link to={'allfilms'}>All Films</Link>
            </div>
        </div>
    );
};

export {Header};