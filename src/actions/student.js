import request from "superagent";
import { baseUrl } from '../constants' 

export const STUDENT_CREATE_SUCCESS = "STUDENT_CREATE_SUCCESS";

const studentCreateSuccess = student => ({
    type: STUDENT_CREATE_SUCCESS,
    payload: student
  });

export const createStudent = data => (dispatch, getState) => {
    const token = getState().Login.jwt;
    console.log('checking data',data,token)
    request
      .post(`${baseUrl}/student`)
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(studentCreateSuccess(response.body));
      })
      .catch(console.error);
  };


// ----------- Delete a student ----------------
export const STUDENT_DELETE_SUCCESS = 'STUDENT_DELETE_SUCCESS'

const studentDeleteSuccess = id => ({
    type: STUDENT_DELETE_SUCCESS,
    payload: id

})

export const deleteStudent = (id) => (dispatch, getState) => {
    const token = getState().Login.jwt;
    request
        .delete(`${baseUrl}/student/${id}`)
        .set("Authorization", `Bearer ${token}`)
        .then(response => {
            console.log(response.body)
            console.log('checking id ', id)
            dispatch(studentDeleteSuccess(id))

        })
        .catch(console.error)
}

//-----------Fetch count of how many students have green or yellow or red color band----
export const COLOR_COUNT_FETCHED = 'COLOR_COUNT_FETCHED'
 const colorFetched = count => ({
    type: COLOR_COUNT_FETCHED,
    payload: count
})
export const colorCount = (id) => (dispatch) => {
    request(`${baseUrl}/student/percentage/${id}`)
        .then(response => {
            
            dispatch(colorFetched(response.body))
        })
        .catch(console.error)
}