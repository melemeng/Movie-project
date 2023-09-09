//

/*
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
 

 // screenshot 

 //export const movieScreeshotsURL = (movie_id) => `${Api_Url}${movie_id}/screenshots`;


 // function nur apirequest 

 // performs api request to path using api key in header
 //const apiRequest = async (path) => {}

 // all api functions use apiRequest internally
 //const fetchMostPopularMovies = async () => {}
 //const fetchUpcomingMovies = async () => {}
 //const fetchMovieDetails = async (movie_id) => {}

*/

// Use environment variable or config file to store API key
const apiKey = process.env.MOVIE_DB_API_KEY || '093d7f98793dfd70a79d3385cdf985be';  // NOTE: Defaulting to hardcoded key for this example, but in a real-world scenario, avoid this!

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const searchUrlBase = 'https://api.themoviedb.org/3/search/movie';

// Helper function to build URLs
const buildUrl = (endpoint, query = '') => {
    return `${baseUrl}${endpoint}?api_key=${apiKey}${query}`;
};

export const mostPopularMoviesUrl = () => buildUrl('popular');
export const upcomingMoviesUrl = () => buildUrl('upcoming');
export const inTheatersUrl = () => buildUrl('now_playing');

// For movie details
export const movieDetailsURL = (movieId) => buildUrl(movieId);

// For searching movies by name
export const searchMoviesURL = (movieName) => {
    return `${searchUrlBase}?query=${movieName}&api_key=${apiKey}`;
};

