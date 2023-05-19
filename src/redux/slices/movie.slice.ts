import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[],
    page: number,
    loading: boolean
}

const initialState: IState = {
    movies: [],
    page: 1,
    loading:false

}


const getAllMoviesAsync = createAsyncThunk<IMovieResponse<IMovie[]>, number>(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getAllMovie(page.toString());
            await new Promise(resolve => setTimeout(resolve,700))
            return data;
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        inc: (state) => {
            state.page += 1
        },
        dec: (state) => {
            state.page -= 1
        },

    },
    extraReducers: builder => {
        builder
            .addCase(getAllMoviesAsync.fulfilled, (state, action) => {
                const {results} = action.payload
                state.movies = results
            })
            .addMatcher(isPending(), (state) => {
                state.loading = true
            })
            .addMatcher(isFulfilled(),state => {
                state.loading = false
            })
    }
});


const {actions, reducer: movieReducer} = slice
const movieActions = {...actions, getAllMoviesAsync}
export {movieActions, movieReducer}