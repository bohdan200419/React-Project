import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import'./mainLayouts.css'
import '../mode.css'
import {useAppSelector} from "../hooks";


const MainLayouts = () => {
    const {mode}=useAppSelector(state => state.mode)
    return (
        <div className={`layoutsWrapper ${mode===2?'bg-dark':'bg-light'}`}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayouts};