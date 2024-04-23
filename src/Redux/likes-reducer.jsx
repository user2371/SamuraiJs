const UPDATE_LIKES_COUNT = "UPDATE-LIKES-COUNT";

const likesReducer = (state, action) => {
    if (action.type === UPDATE_LIKES_COUNT) {
        state.postData[action.id].likesCount += 1;
    }
    return state;
}

export const likesUpdateCreator = (id) => ({type: UPDATE_LIKES_COUNT, id: id});
export default likesReducer;