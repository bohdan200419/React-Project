import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {AllFilmsPage, GenresPage, AboutOfFilmPage, MainPage, FindedMoviesPage} from "./pages";
import './Reset.css'


function App() {
    return (

        <Routes>

            <Route path={'/'} element={<MainLayouts/>}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'genre'} element={<GenresPage/>}/>
                <Route path={'allfilms'} element={<AllFilmsPage/>}/>
                <Route path={'/aboutOfFilm'} element={<AboutOfFilmPage/>}/>
                <Route path={'findedMovies'} element={<FindedMoviesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
