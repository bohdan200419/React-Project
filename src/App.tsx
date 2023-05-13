import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {AllFilms, Genre} from "./pages";

function App() {
    return (
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route path={'genre'} element={<Genre/>}/>
                    <Route path={'allfilms'} element={<AllFilms/>}/>
                </Route>
            </Routes>
    );
}

export default App;
