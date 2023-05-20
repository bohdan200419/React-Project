import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IAboutMovie, IGenre, IVideo, IVideoRes} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movie: IAboutMovie<IGenre[]>[]
    video: string|null,
    loading:boolean
}

const initialState: IState = {
    movie: [],
    video: null,
    loading:false
}




const getMovieAsync = createAsyncThunk<IAboutMovie<IGenre[]>, string>(
    'getAllMovies/movieSlice',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.aboutOfFilmById(id)
            await new Promise(resolve => setTimeout(resolve,700))
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
)
const getVideo = createAsyncThunk<IVideoRes<IVideo[]>, string>(
    'getVideo/movieSlice',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideo(`${id}`)
            return data
        } catch (e) {
            return rejectWithValue('Сервер не віповідає')
        }
    }
)
const slice = createSlice({
    name: 'aboutOfFilmSlice',
    initialState,
    reducers: {
        resetVideo:(state)=>{
            state.video = ''
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMovieAsync.fulfilled, (state, action) => {
                state.movie.splice(0, 1, action.payload)
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                if (action.payload.results && action.payload.results[0] ) {
                    state.video = action.payload.results[0].key;
                }
            })
            .addMatcher(isPending(getMovieAsync),state => {
                state.loading = true
            })
            .addMatcher(isFulfilled(getMovieAsync),state => {
                state.loading = false
            })
    }
})


const {reducer: aboutOfFilmReducer, actions} = slice

const aboutOfFilmActions = {...actions, getMovieAsync, getVideo}
export {aboutOfFilmActions, aboutOfFilmReducer}