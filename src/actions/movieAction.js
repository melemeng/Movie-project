
import axios from "axios";

import {mostPopularMoviesUrl, InTheatersUrl, UpcommingMoviesUrl,searchMoviesURL} from "../api";

export const loadMovies = () => async (dispatch)=>{
    const mostPopularData = await axios.get(mostPopularMoviesUrl());
    const InTheatersData = await axios.get(InTheatersUrl());
    const UpcomingMoviesData = await axios.get(UpcommingMoviesUrl());
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: mostPopularData.data.results,
            inTheaters: InTheatersData.data.results,
            upcoming: UpcomingMoviesData.data.results,
        },
    })
};

export const fetchSearch = (movie_name) => async (dispatch) => {
    const searchMovies = await axios.get(searchMoviesURL(movie_name));
    console.log(searchMovies.data.results);
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchMovies.data.results,
      },
    });
  };