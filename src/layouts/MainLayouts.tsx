import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import css from './mainLayouts.module.css'


const MainLayouts = () => {
    return (
        <div className={css.layoutsWrapper}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayouts};