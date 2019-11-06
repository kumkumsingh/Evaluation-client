import request from "superagent";
import { baseUrl } from '../constants' 

export const STUDENT_CREATE_SUCCESS = "STUDENT_CREATE_SUCCESS";

const studentCreateSuccess = student => ({
    type: STUDENT_CREATE_SUCCESS,
    payload: student
  });

export const createStudent = data => (dispatch, getState) => {
    const token = getState().auth;
    console.log('checking data',data,token)
    request
      .post(`${baseUrl}/student`)
      //.set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(studentCreateSuccess(response.body));
      })
      .catch(console.error);
  };