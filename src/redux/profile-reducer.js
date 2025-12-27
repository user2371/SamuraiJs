import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_LIKES_COUNT = "UPDATE-LIKES-COUNT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_USER_AVATAR_SUCCESS = "SET_USER_AVATAR_SUCCESS";
const SET_PHOTO = "SET_PHOTO";

const initialState = {
  postData: [
    { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0 },
    { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0 },
    { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0 },
  ],
  idCounter: 2,
  newPostText: "Type your message here",
  userProfile: null,
  userStatus: "initialStatus",
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
      stateCopy.postData.push(newPost);
      return stateCopy;
    case SET_USER_STATUS:
      return { ...state, userStatus: action.userStatus };
    case UPDATE_LIKES_COUNT:
      stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData[action.id] = { ...state.postData[action.id] };
      stateCopy.postData[action.id].likesCount =
        stateCopy.postData[action.id].likesCount + 1;
      //state.postData[action.id].likesCount += 1;
      return stateCopy;
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((el) => el.id != action.id),
      };
    case SET_USER_AVATAR_SUCCESS:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    case SET_PHOTO:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: {
            small: action.photoUrl,
            large: action.photoUrl,
          },
        },
      };
    default:
      return state;
  }
};

export let addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText: newPostText };
};

export const likesUpdateCreator = (id) => {
  return { type: UPDATE_LIKES_COUNT, id: id };
};

export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile: userProfile };
};

export const setUserStatus = (userStatus) => {
  return { type: SET_USER_STATUS, userStatus: userStatus };
};

export const deletePostAC = (id) => {
  return { type: DELETE_POST, id: id };
};

export const setUserAvatarAC = (photos) => {
  return { type: SET_USER_AVATAR_SUCCESS, photos: photos };
};

export const setPhotoAC = (photoUrl) => ({
  type: SET_PHOTO,
  photoUrl,
});

export const getUserProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    const response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
  };
};

export const getUserStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);

    dispatch(setUserStatus(response.data.status));
  };
};

export const updateUserStatusThunkCreator = (userId, userStatus) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(userId, userStatus);

    dispatch(setUserStatus(userStatus));
  };
};

export const updateUserPhotoThunkCreator = (userId1, photo) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserPhoto(1, photo);
    dispatch(setUserAvatarAC(response.data.photos));
  };
};
export const updateUserPhotoMock = (photoUrl) => (dispatch) => {
  dispatch(setPhotoAC(photoUrl));
};
export default profileReducer;
