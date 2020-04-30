import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { REGISTRATION, LOGIN, GET_ERRORS } from "./types";

//Get Theatre Lists

export const RegisterUser = user_data => dispatch => {
  axios
    .post(`/api/users/register/`, user_data)
    .then(res => {
      //   console.log ("res data",res.data);
      dispatch({
        type: REGISTRATION,
        isRegistered: true,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: REGISTRATION,
        isRegistered: false,
        payload: {}
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  localStorage.setItem("name", decoded.name);
  return {
    type: LOGIN,
    payload: decoded
  };
};

export const LoginUser = user_data => dispatch => {
  axios
    .post(`/api/users/login`, user_data)
    .then(res => {
      // console.log ('res data', res.data);
      // Save to localStorage

      localStorage.setItem("Token", res.data.token);
      // Set token to Auth header
      setAuthToken(res.data.token);

      // dispatch({
      //   type: LOGIN,
      //   payload: res.data
      // });
      const decoded = jwt_decode(res.data.token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      // dispatch({
      //   type: LOGIN,
      //   payload: { success: false, token: "" }
      // })
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("Token");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
