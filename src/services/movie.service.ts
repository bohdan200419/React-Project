import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {
    IAboutMovie,
    IGenre,
    IGenres,
    IMovie,
    IMovieResponse,
    ISearch,
    ISearchResult,
    IVideo,
    IVideoRes
} from "../interfaces";




const movieService = {
    getAllGenre: () => axiosService.get<IGenres<IGenre[]>>(urls.genre),
    getAllMovie:(page:string)=> axiosService.get<IMovieResponse<IMovie[]>>(`${urls.allMovie}${page}`),
    aboutOfFilmById:(id:string)=> axiosService.get<IAboutMovie<IGenre[]>>(`${urls.findById}/${id}`),
    searchMovie:(name:string,page:string)=> axiosService.get<ISearch<ISearchResult[]>>(`${urls.search}${name}&page=${page}`),
    getSearchedMovies:(id:string)=>axiosService.get<IMovie>(`${urls.findById}/${id}`),
    findByGenre:(id:string,page:string)=> axiosService.get<IMovieResponse<IMovie[]>>(`${urls.findByGenre}${id}&page=${page}`),
    getVideo:(id:string)=> axiosService.get<IVideoRes<IVideo[]>>(`${urls.videoById(id)}`),
    getPopular:()=>axiosService.get<IMovieResponse<IMovie[]>>(`${urls.popular}`)
}
export {movieService}