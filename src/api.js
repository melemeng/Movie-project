//
const api_key = '093d7f98793dfd70a79d3385cdf985be'

const Api_Url = 'https://api.themoviedb.org/3/movie/'

const Search_Url = 'https://api.themoviedb.org/3/search/movie?query='

const mostPopularMovies = `popular?api_key=${api_key}`;
const comingSoonMovies = `upcoming?api_key=${api_key}`;
const InTheaters = `now_playing?api_key=${api_key}`;
const movDetails = `?api_key=${api_key}`
const SearDetails = `&api_key=${api_key}`

 export const mostPopularMoviesUrl =()=> `${Api_Url}${mostPopularMovies}`;
 export const UpcommingMoviesUrl =()=> `${Api_Url}${comingSoonMovies}`;
 export  const InTheatersUrl =()=> `${Api_Url}${InTheaters}`;

 // Movie Details 

 export const movieDetailsURL = (movie_id) => `${Api_Url}${movie_id}${movDetails}`;

 //Searched game
 export const searchMoviesURL = (movie_name) =>   `${Search_Url}${movie_name}${SearDetails}`;
 ;

 // screenshot 

 //export const movieScreeshotsURL = (movie_id) => `${Api_Url}${movie_id}/screenshots`;


 // function nur apirequest 

 // performs api request to path using api key in header
 //const apiRequest = async (path) => {}

 // all api functions use apiRequest internally
 //const fetchMostPopularMovies = async () => {}
 //const fetchUpcomingMovies = async () => {}
 //const fetchMovieDetails = async (movie_id) => {}


