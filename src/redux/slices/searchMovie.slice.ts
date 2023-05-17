import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IMovie, ISearchResult} from "../../interfaces";
import {AxiosError} from 'axios';


interface IState {
    movies: ISearchResult[],
    page: number,
    findedMovies: IMovie[]
    trigger: boolean;
    name: string
    maxPage: string

}

const initialState: IState = {
    movies: [],
    page: 1,
    findedMovies: [],
    trigger: true,
    name: '',
    maxPage: ''

}


const slice = createSlice({
    name: 'searchMovieSlice',
    initialState,
    reducers: {
        clearMovies: (state) => {
            state.movies = []
        },
        inc: (state) => {
            state.page += 1
        },
        dec: (state) => {
            state.page -= 1
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        resetPage: (state) => {
            state.page = 1
        }
    },
    extraReducers: builder => {
        builder.addCase(searchFilm.fulfilled, (state, action) => {
            state.findedMovies = []
            const {total_pages} = action.payload
            state.maxPage = total_pages.toString()
            const {results} = action.payload
            state.movies = results

        });
        builder.addCase(findedMovies.fulfilled, (state, action) => {
            const payload = action.payload;
            if (!state.findedMovies.some(result => result.id === payload.id)) {
                state.findedMovies.push(payload);
            }
        })
    }
});

const searchFilm = createAsyncThunk(
    'searchFilm/searchMovieSlice',
    async ({name, page}: { name: string, page: string }, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(`${name}`, `${page}`)
            console.clear();
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const findedMovies = createAsyncThunk(
    'findedMovies/searchMovieSlice',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearchedMovies(id)
            console.clear()
            return data
        } catch (error) {
            return rejectWithValue('Сервер не відповідає');
        }

    }
)

const {reducer: searchReducer, actions} = slice

const searchActions = {...actions, searchFilm, findedMovies}

export {searchActions, searchReducer}