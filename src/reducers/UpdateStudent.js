import { STUDENT_UPDATE_SUCCESS } from '../actions/student'  

export default (state = {}, action = {}) => {
    switch (action.type) {
        case STUDENT_UPDATE_SUCCESS:

            return action.payload

        default:

            return state
    }
}