import { BATCH_FETCHED } from '../actions/batch'
import { STUDENT_CREATE_SUCCESS } from '../actions/student'
import { STUDENT_DELETE_SUCCESS } from '../actions/student'
export default (state = {}, action = {}) => {
    switch (action.type) {
        case BATCH_FETCHED:
            return { ...action.payload }
            case STUDENT_CREATE_SUCCESS:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
            case STUDENT_DELETE_SUCCESS:
        
                return {...state,students:state.students.filter(student => student.id !== action.payload)}
                    
            default:
            return state
    }
}