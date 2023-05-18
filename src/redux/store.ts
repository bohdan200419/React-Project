import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, aboutOfFilmReducer, genreReducer, searchReducer,modeReducer} from "./slices";





const rootReducer = combineReducers({
    genre: genreReducer,
    movie: movieReducer,
    aboutOfFilm: aboutOfFilmReducer,
    searchFilm:searchReducer,
    mode:modeReducer
})
const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']


export type {
    RootState,
    AppDispatch,
    AppStore
}
export {setupStore}