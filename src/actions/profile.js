import request from "superagent";
import { baseUrl } from '../constants' 


export const PROFILE_ADDED = 'PROFILE_ADDED'
 const profileAdded = profile => ({
    type: PROFILE_ADDED,
    payload: profile
})
export const createProfile = data => (dispatch, getState) => {
    //const token = getState().Login.jwt;
    //console.log('checking data',data,token)
    request
      .post(`${baseUrl}/profile`)
      //.set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(profileAdded(response.body));
      })
      .catch(console.error);
  };

