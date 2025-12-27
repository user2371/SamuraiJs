import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";


const SET_AUTH = "SET_AUTH";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload
});

export const getAuthMe = () => async (dispatch) => {
  const res = await authAPI.me();
  if (res.data.isAuth) {
    dispatch(setAuth(res.data));
  }
};
export const login = (login, password) => async (dispatch) => {
  const res = await authAPI.login(login, password);

  if (res.data.length === 1) {
    const user = res.data[0];

    const authData = {
      id: user.id,
      login: user.login,
      email: user.email,
      isAuth: true
    };

    await authAPI.setAuth(authData);
    dispatch(setAuth(authData));
  } else {
    alert('Wrong login or password');
  }
};

export const logout = () => async (dispatch) => {
  await authAPI.logout();
  dispatch(setAuth({
    id: null,
    login: null,
    email: null,
    isAuth: false
  }));
};




export default authReducer;
