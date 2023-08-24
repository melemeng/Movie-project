import {combineReducers} from'redux';

import movieReducer from './moviesReducer';


const rootReducer = combineReducers({
    movie : movieReducer,
});

export default rootReducer;