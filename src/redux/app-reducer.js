import { getAuthUserDataThunkCreator } from "./auth-reducer"


const SET_INISIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"

let initialState = {
    initializedSuccess: false,
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INISIALIZED_SUCCESS:
            return { ...state, initializedSuccess: true, }
        default:
            return state
    }

}

export let setInitializedSuccess = () => {
    return { type: SET_INISIALIZED_SUCCESS }
}

export const setInitializedSuccessThunkCreator = () => {
    return (dispatch) => {
        dispatch(getAuthUserDataThunkCreator())
            .then(() => {
                dispatch(setInitializedSuccess())
            }
            )
    }
}


export default appReducer;