import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";

import {movieService} from "../../services";
import {IMovie, ISearch, ISearchResult} from "../../interfaces";



interface IState {
    movies: ISearchResult[],
    page: number,
    findedMovies: IMovie[]

    name: string
    maxPage: string,
    loading:boolean

}

const initialState: IState = {
    movies: [],
    page: 1,
    findedMovies: [],
    name: '',
    maxPage: '',
    loading:false

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
        builder.addCase(findMovies.fulfilled, (state, action) => {
            const payload = action.payload;
            if (!state.findedMovies.some(result => result.id === payload.id)) {
                state.findedMovies.push(payload);
            }
        })
            .addMatcher(isPending(),state => {
                state.loading = true
            })
            .addMatcher(isFulfilled(),state => {
                state.loading = false
            })
    }
});

const searchFilm = createAsyncThunk<ISearch<ISearchResult[]>,any>(
    'searchFilm/searchMovieSlice',
    async ({name, page}: { name: string, page: string }, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(`${name}`, `${page}`)
            await new Promise(resolve => setTimeout(resolve,700))
            console.clear();
            return data
        } catch (e) {
            return rejectWithValue('Сервер не відповідає');
        }
    }
);
const findMovies = createAsyncThunk<IMovie,any>(
    'findedMovies/searchMovieSlice',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearchedMovies(id)
            console.log(data);
            // console.clear()
            return data
        } catch (error) {
            return rejectWithValue('Сервер не відповідає');
        }

    }
)

const {reducer: searchReducer, actions} = slice

const searchActions = {...actions, searchFilm, findMovies}

export {searchActions, searchReducer}