const baseURL = 'https://api.themoviedb.org/3'
const urls = {
    genre: '/genre/movie/list?language=en',
    search: '/search/keyword?query=',
    allMovie: '/discover/movie?page=',
    findById: '/movie',
    findByGenre: '/discover/movie?with_genres=',
    videoById: (id: string) => `/movie/${id}/videos`,
    popular:'/movie/popular'
}


export {
    baseURL,
    urls
}