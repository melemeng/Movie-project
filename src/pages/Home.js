// React and Redux imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Styling and animation imports
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Internal component and action imports
import { loadMovies } from "../actions/movieAction.js";
import MovieDetails from "../components/MovieDetails.js";
import Movie from "../components/Movie.js";
import { fadeIn } from "../animations";


const Home = () => {
  // Hooks for dispatching actions and selecting from state
  const dispatch = useDispatch();
  const { inTheaters, popular, upcoming, searched } = useSelector(
    (state) => state.movie
  );

  // Extracts the movie ID from the URL path
  const moviePathId = useLocation().pathname.split("/")[2];

  //console.log("first fetch")

  // Fetch the movies once the component is mounted
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  //console.log(inTheaters, popular, upcoming, searched); 


  // Helper function to render movie   
  const renderMovies = (movies, title) => (
    <>
      <h2>{title}</h2>
      <Movies>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            name={movie.title}
            released={movie.release_date}
            poster={movie.poster_path}
            image={movie.backdrop_path}
          />
        ))}
      </Movies>
    </>
  );

  return (
    <MovieList variants={fadeIn} initial="hidden" animate="show">
      {/* Animation wrapper */}
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {moviePathId && <MovieDetails pathId={moviePathId} />}
        </AnimatePresence>

        {/* Conditionally render searched movies if any are present */}
        {searched.length ? (
          <div className="searched">
            {renderMovies(searched, "Search Movies")}
          </div>
        ):("")}

        {/* Render other movie sections */}
        {renderMovies(upcoming, "Upcoming Movies")}
        {renderMovies(popular, "Popular Movies")}
        {renderMovies(inTheaters, "In Theaters")}
      </LayoutGroup>
    </MovieList>
  );
};

// Styled components for layout and design
const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
