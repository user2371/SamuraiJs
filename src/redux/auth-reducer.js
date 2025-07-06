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
            return { ...state, ...action.userData, isAuth: true }
            break
        default:
            return state
    }
}

export let setAuthUserData = (id, email, login) => {
    return { type: SET_USER_DATA, userData: { id: id, email: email, login: login } }
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {

                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}
}

export default authReducer;