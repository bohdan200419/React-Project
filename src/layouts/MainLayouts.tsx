import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";


const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayouts};