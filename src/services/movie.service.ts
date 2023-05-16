import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {IAboutMovie, IGenre, IGenres, IMovie, IMovieResponse} from "../interfaces";



const movieService = {
    getAllGenre: () => axiosService.get<IGenres<IGenre[]>>(urls.genre),
    getAllMovie:(page:string)=> axiosService.get<IMovieResponse<IMovie[]>>(`${urls.allMovie}${page}`),
    aboutOfFilmById:(id:string)=> axiosService.get<IAboutMovie<IGenre[]>>(`${urls.findById}/${id}`)
}
export {movieService}