import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movie:IMovie|null
}
const initialState:IState ={
    movie:null
}


const slice = createSlice({
    name:'aboutOfFilmSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getMovieAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                state.movie = action.payload
            })
    }
})

const getMovieAsync = createAsyncThunk<IMovie, string>(
    'movieSlice/getAllMovies',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.aboutOfFilmById(id)
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
)

const {reducer:aboutOfFilmReducer,actions} = slice

const aboutOfFilmActions= {...actions,getMovieAsync}
export {aboutOfFilmActions,aboutOfFilmReducer}