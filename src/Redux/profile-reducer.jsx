
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {    
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

export default profileReducer;