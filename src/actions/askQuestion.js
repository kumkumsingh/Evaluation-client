import request from "superagent";
import { baseUrl } from '../constants' 

//ACTION FOR WHICH STUDENT CAN ASK A QUESTION
export const RANDOM_STUDENT_SELECTED = 'RANDOM_STUDENT_SELECTED'
 const randomStudent = randomStudent => ({
    type: RANDOM_STUDENT_SELECTED,
    payload: randomStudent
})
export const randomStudentSelected = data => (dispatch, getState) => {
    //const token = getState().Login.jwt;
    //console.log('checking data',data,token)
    request
      .get(`${baseUrl}/student/random`)
      //.set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(randomStudent(response.body));
      })
      .catch(console.error);
  };
