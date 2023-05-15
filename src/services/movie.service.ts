import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {IGenre, IGenres, IMovie, IMovieResponse} from "../interfaces";
import {IRes} from "../types";


const movieService = {
    getAllGenre: () => axiosService.get<IGenres<IGenre[]>>(urls.genre),
    getAllMovie:(page:string)=> axiosService.get<IMovieResponse<IMovie[]>>(`${urls.allMovie}${page}`),
    aboutOfFilmById:(id:string)=> axiosService.get<IMovie>(`${urls.findById}/${id}`)
}
export {movieService}