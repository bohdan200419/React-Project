import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IGenre, IGenres} from "../../interfaces";




interface IState {
    genres: IGenre[],
    trigger: boolean
}

const initialState: IState = {
    genres: [],
    trigger: false
}
const getAllGenres = createAsyncThunk<IGenres<IGenre[]>, void>(
    'genreSlice/getAllGenres',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getAllGenre();
            return data;
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })
    }
})
const {actions, reducer: genreReducer} = slice

const genreActions = {...actions, getAllGenres}

export {
    genreActions,
    genreReducer
}