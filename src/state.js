import messagesReducer from "./redux/messages-reducer";
import profileReducer from "./redux/profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 0, message: "Hi", likesCount: 12, dislikesCount: 0, },
                { id: 1, message: "What's up", likesCount: 0, dislikesCount: 0,},
                { id: 2, message: "Good bye", likesCount: 5, dislikesCount: 0,},
            ],
            idCounter: 2,
            newPostText: "",
        },
        messagesPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state) {
        console.log("state is changed call the subscribers")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
}

//window.store = store;
export default store;

