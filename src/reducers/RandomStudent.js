import { RANDOM_STUDENT_SELECTED } from '../actions/askQuestion'
const reducer = (state={}, action={}) =>{
    switch(action.type){
        case RANDOM_STUDENT_SELECTED:
            return action.payload
        default:
            return state
    }
}

export default reducer;