import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const MovieDetails = () => {

    const {inTheaters,popular,upcoming} = useSelector((state) => state.movie);

    return(
        <div  className="card shadow">
            <div className="details">
                <div className="stats">
                    <div className="rating">
                    <h3 >{upcoming.title}</h3>
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