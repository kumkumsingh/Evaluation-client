import { BATCHES_FETCHED  } from '../actions/batch'
import { BATCH_CREATE_SUCCESS } from '../actions/batch'
export default (state = [], action={}) => {
    switch (action.type) {
        case BATCHES_FETCHED:
            return [...action.payload]
            case BATCH_CREATE_SUCCESS:
                return [...state, { ...action.payload }]
            default:
            return state
    }
}