
const iniState = {
    popular: [],
    inTheaters: [],
    upcoming: [],
    searched: []
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
            case "FETCH_SEARCHED":
                return {
                  ...state,
                  searched: action.payload.searched,
                };
            case "CLEAR_SEARCHED":
                return {
                      ...state,
                      searched: [],
                    };
            
        default:
            return {...state};

            

    };

}
//console.log("Received action:", action);

 export default  movieReducer;