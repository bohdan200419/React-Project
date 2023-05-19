import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IGenre, IGenres, IMovie, IMovieResponse} from "../../interfaces";


interface IState {
    genres: IGenre[],
    trigger: boolean,
    moviesByGenre: IMovie[],
    page: number,
    loading:boolean
}

const initialState: IState = {
    genres: [],
    trigger: false,
    moviesByGenre: [],
    page: 1,
    loading:false
}


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
            await new Promise(resolve => setTimeout(resolve,1000))
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відовідає')
        }
    }
)
const slice = createSlice({
    name: 'genreSlice',
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
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })
            .addCase(findByGenre.fulfilled, (state, action) => {
                const {results, page} = action.payload
                state.page = page
                state.moviesByGenre = results
            })
            .addMatcher(isPending(),(state) => {
                state.loading = true
            })
            .addMatcher(isFulfilled(),state => {
                state.loading = false
            })

    }
})
const {actions, reducer: genreReducer} = slice

const genreActions = {...actions, getAllGenres, findByGenre}

export {
    genreActions,
    genreReducer
}