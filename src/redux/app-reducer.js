import { getAuthMe } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";

const initialState = {
  initializedSuccess: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return { ...state, initializedSuccess: true };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({
  type: SET_INITIALIZED_SUCCESS
});

// 🔹 initialization app
export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthMe());
  dispatch(setInitializedSuccess());
};

export default appReducer;