
const iniState = { 
    movie : {},
    isLoading: true,
};

const detailReducer = ( state = iniState, action) => {
   // console.log(action);

    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                movie: action.payload.movie,
                isLoading: false,
               
            };
            case "LOADING_DETAIL":
                return {
                  ...state,
                  isLoading: true,
                };

            default:
                return{...state};

    }
}
export default detailReducer;