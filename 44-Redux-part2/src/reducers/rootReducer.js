import { combineReducers } from 'redux'
import toyReducer from './toyReducer'

let initialState = {
    count: 0
} 

// reducers => pure function => args => 2 => state, action
let countReducer = (state = initialState , action) => {
    // console.log(action)

    switch(action.type){
        case "inc":
            return {
               ...state, count: state.count + action.payload 
            }
        case "dec":
            return {
                ...state, count: state.count - 2
            }
        default:
            return state
    }
    // return state
}

const rootReducer = combineReducers({countReducer, toyReducer})
// const rootReducer = combineReducers({countReducer: countReducer})


export default rootReducer