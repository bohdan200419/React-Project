import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IGenre, IGenres, IMovie, IMovieResponse} from "../../interfaces";


interface IState {
    genres: IGenre[],
    trigger: boolean,
    moviesByGenre: IMovie[],
    page: number
}

const initialState: IState = {
    genres: [],
    trigger: false,
    moviesByGenre: [],
    page: 1
}

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        inc: (state) => {
            state.page += 1
        },
        dec: (state) => {
            state.page -= 1
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })
        builder
            .addCase(findByGenre.fulfilled, (state, action) => {
                const {results, page} = action.payload
                state.page = page
                state.moviesByGenre = results
            })
    }
})
const getAllGenres = createAsyncThunk<IGenres<IGenre[]>, void>(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllGenre();
            return data;
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const findByGenre = createAsyncThunk<IMovieResponse<IMovie[]>, any>(
    'findByGenre/genreSlice',
    async ({id,page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.findByGenre(id,page)
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відовідає')
        }
    }
)
const {actions, reducer: genreReducer} = slice

const genreActions = {...actions, getAllGenres, findByGenre}

export {
    genreActions,
    genreReducer
}