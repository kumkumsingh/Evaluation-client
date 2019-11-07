import {COLOR_COUNT_FETCHED} from '../actions/student'
//reducer for calculating percentages of students based on their color code
const reducer = (state=[], action={}) =>{
    switch(action.type){
        case COLOR_COUNT_FETCHED:
            return action.payload
        default:
            return state
    }
}

export default reducer;