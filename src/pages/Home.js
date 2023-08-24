import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadMovies} from "../actions/movieAction.js"

// components

import Movie from "../components/Movie.js";
// styles and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';



const Home = () =>{

  // Fetch Movies
    const dispatch = useDispatch();
    useEffect(() =>{
    dispatch(loadMovies());
  },[dispatch]);

    const {inTheaters,popular,upcoming} = useSelector((state) => state.movie);
  return (

      <MovieList>
        <h2>upComing Movies</h2>
          <Movies>
              {upcoming.map(movie=>(
                  <Movie key={movie.id} 
                  id={movie.id} 
                  name={movie.title} 
                  released={movie.release_date} 
                  poster={movie.poster_path}
                  image={movie.backdrop_path}/>
              ))}
          </Movies>


          <h2>popular Movies</h2>
          <Movies>
              {popular.map(movie=>(
                  <Movie key={movie.id} 
                  id={movie.id} 
                  name={movie.title} 
                  released={movie.release_date} 
                  poster={movie.poster_path}
                  image={movie.backdrop_path}/>
              ))}
          </Movies>


          <h2>In Theaters</h2>
          <Movies>
              {inTheaters.map(movie=>(
                  <Movie key={movie.id} 
                  id={movie.id} 
                  name={movie.title} 
                  released={movie.release_date} 
                  poster={movie.poster_path}
                  image={movie.backdrop_path}/>
              ))}
          </Movies>

      </MovieList>

  );

}

const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;

  }
    
  `;
const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  `;
export default Home;
