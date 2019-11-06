import { LOGIN_SUCCESS } from "../actions/login";
//const token = localStorage.getItem("jwt");
//const initialState = token ? token : null;
export default (state = null, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};