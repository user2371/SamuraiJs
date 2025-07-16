import { authAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return { ...state, ...action.userData }
        default:
            return state
    }
    
}

export let setAuthUserData = (id, email, login, isAuth) => {
    
                    
    return { type: SET_USER_DATA, userData: { id: id, email: email, login: login, isAuth } }
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {

        authAPI.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;

                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const postLoginDataThunkCreator = (email, password, rememberMe) => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {

                    dispatch(getAuthUserDataThunkCreator())
                }
            })
    }
}

export const deleteLoginDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer;