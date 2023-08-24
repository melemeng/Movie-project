
const iniState = {
    popular: [],
    inTheaters: [],
    upcoming: [],
    search: []
}

const movieReducer = (state = iniState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                popular: action.payload.popular,
                inTheaters: action.payload.inTheaters,
                upcoming: action.payload.upcoming,

            };
            
        default:
            return {...state};

            

    };

}
//console.log("Received action:", action);

 export default  movieReducer;