import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[],
    page: number,
    popular:IMovie[],
    loading: boolean
}

const initialState: IState = {
    movies: [],
    page: 1,
    popular:[],
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
const getPopular = createAsyncThunk<IMovieResponse<IMovie[]>,undefined>(
    'getPopular/movieSlice',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getPopular()
            return data
        }catch (e) {
            return rejectWithValue('Сервер не віповідає')
        }
    }
)

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
            .addCase(getPopular.fulfilled,(state, action) => {
                const {results} = action.payload
                state.popular = results
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
const movieActions = {...actions, getAllMoviesAsync,getPopular}
export {movieActions, movieReducer}