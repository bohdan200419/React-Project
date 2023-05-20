import React from 'react';

import {Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {MoviesPage, GenresBadgePage, MovieInfoPage, MainPage, FindedMoviesPage, MoviesByGenre} from "./pages";
import './Reset.css'


function App() {
    return (

        <Routes>

            <Route path={'/'} element={<MainLayouts/>}>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'genre'} element={<GenresBadgePage/>}/>
                <Route path={'allfilms'} element={<MoviesPage/>}/>
                <Route path={'/aboutOfFilm'} element={<MovieInfoPage/>}/>
                <Route path={'findedMovies'} element={<FindedMoviesPage/>}/>
                <Route path={':id'} element={<MoviesByGenre/>}/>
            </Route>
        </Routes>
    );
}

export default App;
