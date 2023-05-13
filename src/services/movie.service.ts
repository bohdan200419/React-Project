import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenre, IGenres} from "../interfaces/genre.interface";






const movieService = {
    getAllGenre: ()=> axiosService.get<IGenres<IGenre[]>>(urls.genre)
}
export {movieService}