import React from 'react'

    // style and animations

import styles from 'styled-components';
import {motion} from 'framer-motion';
// redux import 

import { useDispatch } from 'react-redux';
import {loadDetail} from '../actions/detailAction';



const Movies = ({name,released,image,poster, id}) => {

    const dispatch = useDispatch();
    const loadDetailhandler = () =>{
        dispatch(loadDetail(id))
    }

    return (
        <StyledMovie onClick={loadDetailhandler}>
            <h4>{name}</h4>
            <p>{released}</p>
            <img src={`https://image.tmdb.org/t/p/original${image}`} alt={name}/>
        </StyledMovie>


    );
};

const StyledMovie = styles(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    text-align: center;
    border-radius: 1rem;
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
    
  }
`;

export default Movies;
