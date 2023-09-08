import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const MovieDetails = ({pathId}) => {

    const {movie, isLoading} = useSelector((state) => state.detail);

    //Exit Detail
    const navigate = useNavigate();
    const exitDetailHander = (e) => {
     const element = e.target;
      if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
    //https://api.themoviedb.org/3/movie/{movie_id}/images
    //debugger



    return(
      <>
      {!isLoading && (
        <CardShadow  className="shadow" onClick={exitDetailHander}>
            <Detail layoutId={pathId} className="details">
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`} >{movie.title}</motion.h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                    <Info>
                    <Genre>
                        {movie.genres && movie.genres.map(data => (
                            <h2 key={data.id}>{data.name}</h2>
                        ))}
                    </Genre>
                    </Info>
                   
                </Stats>

                <Media>
                <motion.img layoutId={`image ${pathId}`} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                 </Media>
                 <Description>
                    {movie.overview}
                 </Description>

            </Detail>
        </CardShadow>
        )}
        </>
    );
};

const CardShadow = styled(motion.div)`
width: 100%;
min-height: 100vh;
overflow-y: scroll;
background: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
z-index: 5;

&::-webkit-scrollbar {
  width: 0.5rem;
}

&::-webkit-scrollbar-thumb {
  background-color: #ff7676;
}

&::-webkit-scrollbar-track {
  background: white;
}
`;

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
z-index: 10;
img {
  width: 100%;
}
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Genre = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 80%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default MovieDetails;