import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "social_network/auth_reducer/SET_USER_DATA";
const SET_CAPTCHA_URL = "social_network/auth_reducer/SET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null, // in null then captcha is not required
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.userData };
    case SET_CAPTCHA_URL:
      return { ...state, captchaURL: action.captchaURL };
    default:
      return state;
  }
};

export let setCaptchaURLAC = (captchaURL) => {

  return {
    type: SET_CAPTCHA_URL,
    captchaURL: captchaURL,
  };
};

export let setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    userData: { id: id, email: email, login: login, isAuth },
  };
};

export const getAuthUserDataThunkCreator = () => {
  return async (dispatch) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;

      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const postLoginDataThunkCreator = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCapthaThunkCreator())
      }
      let errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("Login", { _error: errorMessage }));
    }
  };
};

export const deleteLoginDataThunkCreator = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export const getCapthaThunkCreator = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURLAC(response.data.url));
  };
};

export default authReducer;
