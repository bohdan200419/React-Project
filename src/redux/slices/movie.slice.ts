import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[],
    page: number,


}

const initialState: IState = {
    movies: [],
    page: 1,

}

const slice = createSlice({
    name: 'movieSlice',
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
            .addCase(getAllMoviesAsync.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movies = results
            });
    }
});
const getAllMoviesAsync = createAsyncThunk<IMovieResponse<IMovie[]>, number>(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getAllMovie(page.toString());
            return data;
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);


const {actions, reducer: movieReducer} = slice
const movieActions = {...actions, getAllMoviesAsync}
export {movieActions, movieReducer}