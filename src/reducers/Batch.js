import { BATCH_FETCHED } from '../actions/batch'
export default (state = {}, action = {}) => {
    switch (action.type) {
        case BATCH_FETCHED:
            return { ...action.payload }
            default:
            return state
    }
}