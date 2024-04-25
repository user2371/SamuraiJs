
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
    dialogsData: [
        { id: 1, name: "Dimych", },
        { id: 2, name: "Andrey", },
        { id: 3, name: "Sveta", },
        { id: 4, name: "Sasha", },
        { id: 5, name: "Victor", },
        { id: 6, name: "Valera", },
    ],
    messagesData: [
        { id: 1, message: "Hi", },
        { id: 2, message: "What's up", },
        { id: 3, message: "I am fine thanks", },
        { id: 4, message: "Good bye", },
    ],
    newMessageText: "ff"
};

const messagesReducer = (state = initialState, action) => {
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