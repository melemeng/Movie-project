
import axios from "axios";

import {movieDetailsURL} from '../api';

export const loadDetail = (id) => async (dispatch) =>{
    console.log(movieDetailsURL(id));
    const detailData = await axios.get(movieDetailsURL(id));
   // const screenshotData = await axios.get(movieScreeshotsURL(id));


    dispatch({
        type: "GET_DETAIL",
        payload: {
            movies: detailData.data,
           // screen: screenshotData.data
        },
    });
};

