import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {AllFilmsPage, GenresPage, AboutOfFilmPage} from "./pages";
import './Reset.css'


function App() {
    return (

        <Routes>
            <Route  path={'/'} element={<MainLayouts/>}>
                <Route path={'genre'} element={<GenresPage/>}/>
                <Route path={'allfilms'} element={<AllFilmsPage/>}/>
                <Route path={'/aboutOfFilm'} element={<AboutOfFilmPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
