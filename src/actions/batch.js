import * as request from "superagent";
import { baseUrl } from '../constants'

export const BATCHES_FETCHED = 'BATCHES_FETCHED'
 const batchesFetched = batches => ({
    type: BATCHES_FETCHED,
    payload: batches
})
export const loadBatches = () => (dispatch) => {
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

export const fetchBatch = (id) => (dispatch, getState) => {
    const token = getState().Login.jwt;
    request
        .get(`${baseUrl}/batch/${id}`)
        .set("Authorization", `Bearer ${token}`)
        .then(response => {
            dispatch(batchDetail(response.body))
            console.log(response.body)
        })
        .catch(console.error)
}

// ------------Update particular student --------
export const STUDENT_UPDATE_SUCCESS = 'STUDENT_UPDATE_SUCCESS'

const studentUpdateSuccess = student => ({
    type: STUDENT_UPDATE_SUCCESS,
    payload: student
})

export const UpdateStudent = (id, fullname) => (dispatch, getState) => {

    const token = getState().Login.jwt;
    request
        .put(`${baseUrl}/student/${id}`)
        .set("Authorization", `Bearer ${token}`)
        .send(fullname)
        .then(response => {
            dispatch(studentUpdateSuccess(response.body))
            console.log('checking response in updateteam',response.body)
           
        })
        .catch(console.error)
}


