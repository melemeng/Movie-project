import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const MovieDetails = () => {

    const {screen, movie} = useSelector((state) => state.detail);

    return(
        <div  className="card shadow">
            <div className="details">
                <div className="stats">
                    <div className="rating">
                    <h3 >{movie.name}</h3>
                    <p>Rating : {movie.rating}</p>
                    <p>{Detail.vote_average}</p>
                    </div>
                    <div className="info">
                        <h3>Platform</h3>
                        <p>{Detail.overview}</p>
                    </div>/
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;