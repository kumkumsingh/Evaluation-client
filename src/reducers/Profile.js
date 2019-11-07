import {PROFILE_ADDED} from '../actions/profile'

const reducer = (state=[], action={}) =>{
    switch(action.type){
        case PROFILE_ADDED:
            return action.payload
        default:
            return state
    }
}

export default reducer;