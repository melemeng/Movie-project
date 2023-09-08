import {combineReducers} from'redux';

import movieReducer from './moviesReducer';
import detailReducer from './detailReducer';


const rootReducer = combineReducers({
    movie : movieReducer,
    detail: detailReducer
});

export default rootReducer;