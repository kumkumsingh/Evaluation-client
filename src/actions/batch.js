import * as request from "superagent";
import { baseUrl } from '../constants'

export const BATCHES_FETCHED = 'BATCHES_FETCHED'
 const batchesFetched = batches => ({
    type: BATCHES_FETCHED,
    payload: batches
})
export const loadBatches = () => (dispatch) => {
    // when the state already contains classes, we don't fetch them again
   // if (getState().classes.length !== 0) return

    // a GET /classes request
    request(`${baseUrl}/batch`)
        .then(response => {
            
            dispatch(batchesFetched(response.body))
        })
        .catch(console.error)
}
//---------Creating a batch---------------
export const BATCH_CREATE_SUCCESS = 'BATCH_CREATE_SUCCESS'

const batchCreateSuccess = batch => ({
    type: BATCH_CREATE_SUCCESS,
    payload: batch
})

export const createbatch = (data) => (dispatch, getState) => {
    const token = getState().Login.jwt;
    console.log('checking token',token)
    request
        .post(`${baseUrl}/batch`)
        .set("Authorization", `Bearer ${token}`)
        .send(data)
        .then(response => {
            console.log('checking response',response)
            dispatch(batchCreateSuccess(response.body))
        })
        .catch(console.error)
}

// ------------- fetch a single batch detail------------------
export const BATCH_FETCHED = 'BATCH_FETCHED'

const batchDetail = batch => ({
    type: BATCH_FETCHED,
    payload: batch

})

export const fetchBatch = (id) => dispatch => {

    request
        .get(`${baseUrl}/batch/${id}`)
        .then(response => {
            dispatch(batchDetail(response.body))
            console.log(response.body)
        })
        .catch(console.error)
}

