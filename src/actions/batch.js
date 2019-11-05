import * as request from "superagent";
import { baseUrl } from '../constants'

export const BATCHES_FETCHED = 'BATCHES_FETCHED'
 const batchesFetched = batches => ({
    type: BATCHES_FETCHED,
    payload: batches
})
export const loadBatches = () => (dispatch, getState) => {
    // when the state already contains classes, we don't fetch them again
   // if (getState().classes.length !== 0) return

    // a GET /classes request
    request(`${baseUrl}/batch`)
        .then(response => {
            
            dispatch(batchesFetched(response.body))
        })
        .catch(console.error)
}