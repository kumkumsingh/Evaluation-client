import * as request from "superagent";
import { baseUrl } from "../constants";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGN_MESSAGE = "SIGN_MESSAGE";

const loggedInSuccess = jwt => ({
  type: LOGIN_SUCCESS,
  payload: jwt
});

export const getMessage = message => {
  return {
    type: SIGN_MESSAGE,
    payload: message
  };
};

export const logIn = (email, password) => (dispatch, getState) => {
  // console.log("my email id password", email, password);
  if (email && password) {
    request
      .post(`${baseUrl}/login`)
      .send({ email, password })
      .then(response => {
        dispatch(loggedInSuccess(response.body));
      })
      .catch(error => console.log(error));
  } else {
    // console.log("result in action")
    return "Please provide correct details";
  }
};

//------sign up functionality-------
export const signUp = data => dispatch => {
  if (data.name && data.email && data.password) {
    request
      .post(`${baseUrl}/signup`)
      .send(data)
      .catch(error => console.log(error));
  } else {
    return "Please provide details";
  }
};
