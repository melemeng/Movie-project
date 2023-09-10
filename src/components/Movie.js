import React from 'react'

    // style and animations

import styles from 'styled-components';
import {motion} from 'framer-motion';
// redux import 

import { useDispatch } from 'react-redux';
import {loadDetail} from '../actions/detailAction';

import { Link  } from 'react-router-dom';  



const Movies = ({name,released,image, id}) => {

    const StringPath = id.toString();

    const dispatch = useDispatch();
    const loadDetailhandler = () =>{
        document.body.style.overflow = "hidden";

        dispatch(loadDetail(id))
    }

    return (
        <StyledMovie layoutId={StringPath} onClick={loadDetailhandler}>
            <Link to={`/movie/${id}`}>
            <motion.h3 layoutId={`title ${StringPath}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${StringPath}`} src={`https://image.tmdb.org/t/p/original${image}`} alt={name}/>
            </Link>
        </StyledMovie>


    );
};

const StyledMovie = styles(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
    
  }
`;

export default Movies;
