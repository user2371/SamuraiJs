import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_LIKES_COUNT = "UPDATE-LIKES-COUNT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState = {
    postData: [
        { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0, },
        { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0, },
        { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0, },
    ],
    idCounter: 2,
    newPostText: "",
    userProfile: null,
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
                message: stateCopy.newPostText,
                likesCount: 0,
                dislikesCount: 3,
            };
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = "";
            //state.postData.push(newPost)
            //state.newPostText = "";
            //state.idCounter = state.idCounter + 1;
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy = { ...state };
            stateCopy.newPostText = action.text;
            return stateCopy;
        case UPDATE_LIKES_COUNT:
            stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData[action.id] = { ...state.postData[action.id] };
            stateCopy.postData[action.id].likesCount = stateCopy.postData[action.id].likesCount + 1;
            //state.postData[action.id].likesCount += 1;
            return stateCopy
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile }
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return { type: ADD_POST }
}

export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}
export const likesUpdateCreator = (id) => {
    return { type: UPDATE_LIKES_COUNT, id: id }
};

export const setUserProfile = (userProfile) => {
    return { type: SET_USER_PROFILE, userProfile: userProfile }
}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export default profileReducer;