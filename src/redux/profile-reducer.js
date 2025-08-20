import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_LIKES_COUNT = "UPDATE-LIKES-COUNT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
    postData: [
        { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0, },
        { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0, },
        { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0, },
    ],
    idCounter: 2,
    newPostText: "Type your message here",
    userProfile: null,
    userStatus: "initialStatus"
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.idCounter += 1;
            let newPost = {
                id: stateCopy.idCounter,
                message: action.newPostText,
                likesCount: 0,
                dislikesCount: 3,
            };
            stateCopy.postData.push(newPost)
            return stateCopy;
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus }
        case UPDATE_LIKES_COUNT:
            stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData[action.id] = { ...state.postData[action.id] };
            stateCopy.postData[action.id].likesCount = stateCopy.postData[action.id].likesCount + 1;
            //state.postData[action.id].likesCount += 1;
            return stateCopy
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile }
        case DELETE_POST:
            return { ...state, postData: state.postData.filter(el => el.id != action.id) }

        default:
            return state;
    }
}

export let addPostActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText: newPostText }
}

export const likesUpdateCreator = (id) => {
    return { type: UPDATE_LIKES_COUNT, id: id }
};

export const setUserProfile = (userProfile) => {
    return { type: SET_USER_PROFILE, userProfile: userProfile }
}

export const setUserStatus = (userStatus) => {
    return { type: SET_USER_STATUS, userStatus: userStatus }
}

export const deletePostAC = (id) => {
    return { type: DELETE_POST, id: id }
};

export const getUserProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await usersAPI.getProfile(userId)

        dispatch(setUserProfile(response.data));

    }
}

export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfileStatus(userId)

        dispatch(setUserStatus(response.data))

    }
}

export const updateUserStatusThunkCreator = (userStatus) => {
    return async (dispatch) => {
        const response = await profileAPI.updateUserStatus(userStatus)

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(userStatus))
        }

    }
}
export default profileReducer;