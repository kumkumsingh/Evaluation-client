import {SIGN_MESSAGE} from '../actions/login'

const reducer = (state='', action={}) =>{
    switch(action.type){
        case SIGN_MESSAGE:
            return action.payload
        default:
            return state
    }
}

export default reducer;