import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IAboutMovie, IGenre, ISearchResult} from "../../interfaces";



interface IState {
    movies: ISearchResult[],
    page: number,
    findedMovies:IAboutMovie<IGenre[]>[]
}

const initialState: IState = {
    movies: [],
    page: 1,
    findedMovies:[]
}


const slice = createSlice({
    name: 'searchMovieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchFilm.fulfilled, (state, action) => {
            const {results} = action.payload
            console.log(results);
            state.movies = results
        });
        builder.addCase(findedMovies.fulfilled,(state, action) => {
            state.findedMovies.push(action.payload)
        })
    }
});

const searchFilm = createAsyncThunk(
    'searchFilm/searchMovieSlice',
    async ({name, page}: { name: string, page: string }, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(`${name}`, `${page}`)
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const findedMovies = createAsyncThunk(
    'findedMovies/searchMovieSlice',
    async (id:string,{rejectWithValue}) => {
        try {
            const {data} = await movieService.aboutOfFilmById(id)
            return data
        }catch (e) {
           return rejectWithValue('Сервер не відповідає')
        }
    }
)

const {reducer: searchReducer, actions} = slice

const searchActions = {...actions, searchFilm,findedMovies}

export {searchActions, searchReducer}