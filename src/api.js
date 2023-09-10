
// Use environment variable or config file to store API key
const apiKey = process.env.MOVIE_DB_API_KEY ;  

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

