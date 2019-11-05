import { BATCHES_FETCHED  } from '../actions/batch'
export default (state = [], action) => {
    switch (action.type) {
        case BATCHES_FETCHED:
            return [...action.payload]
            default:
            return state
    }
}