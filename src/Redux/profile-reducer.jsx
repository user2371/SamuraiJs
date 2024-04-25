
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_LIKES_COUNT = "UPDATE-LIKES-COUNT";

const initialState = {
    postData: [
        { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0, },
        { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0,},
        { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0,},
    ],
    idCounter: 2,
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.id,
                message: state.newPostText,
                likesCount: 0,
                dislikesCount: 3,
            };
            state.postData.push(newPost)
            state.newPostText = "";
            state.idCounter = state.idCounter + 1;
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case UPDATE_LIKES_COUNT:
            debugger
            state.postData[action.id].likesCount += 1;
            return state
        default:
            return state;           
    }
}    

export let addPostActionCreator = (id) => {
    return { type: ADD_POST, id: id }
}

export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}
export const likesUpdateCreator = (id) => {
    return {type: UPDATE_LIKES_COUNT, id: id}
};

export default profileReducer;