
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

const messagesReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text;
    } else if (action.type === SEND_MESSAGE) {
        let newMessageText = state.newMessageText
        let newMessage = {
            id: 6,
            message: newMessageText
        }
        state.messagesData.push(newMessage);
    }
    return state;
}

export let updateNewMessageTextCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_TEXT,
            text: text,
        }
    )
}

export let sendMessageCreator = () => {return  {type: SEND_MESSAGE}};

export default messagesReducer;