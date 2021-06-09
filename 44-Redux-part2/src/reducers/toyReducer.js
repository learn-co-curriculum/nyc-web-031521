let initialState = {
    toys: [],
    display: false
} 

let toyReducer = (state = initialState, action ) => {

    switch(action.type){
        case "setToys":
            return {
                ...state, toys: action.payload
            }
        case "changeDisplay":
            return{
                ...state,
                display: !state.display
            }
        case "addAToy":
            return{
                ...state,
                toys: [...state.toys, action.payload]
            }
        case "addALike":
            return{
                ...state,
                toys: action.payload
            }
        case "deleteAToy":
            return{
                ...state,
                toys: action.payload
            }
        default:
            return state
    }
}

export default toyReducer