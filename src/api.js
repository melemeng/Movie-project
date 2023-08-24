//
const api_key = '093d7f98793dfd70a79d3385cdf985be'

const Api_Url = 'https://api.themoviedb.org/3/movie/'

const mostPopularMovies = `popular?api_key=${api_key}`;
const comingSoonMovies = `upcoming?api_key=${api_key}`;
const InTheaters = `now_playing?api_key=${api_key}`;
 export const mostPopularMoviesUrl =()=> `${Api_Url}${mostPopularMovies}`;
 export const UpcommingMoviesUrl =()=> `${Api_Url}${comingSoonMovies}`;
 export  const InTheatersUrl =()=> `${Api_Url}${InTheaters}`;