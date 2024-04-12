const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_DIALOGS_MESSAGE = "ADD-DIALOGS-MESSAGE";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi", likesCount: 12, },
                { id: 2, message: "What's up", likesCount: 0, },
                { id: 3, message: "Good bye", likesCount: 5, },
            ],
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state) {
        console.log("state is changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_DIALOGS_MESSAGE) {
            debugger
            let newMessage = {
                id: 5,
                message: action.message,
            };
            this._state.messagesPage.messagesData.push(newMessage)
            this._callSubscriber(this._state);
        }
    },
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT,
            text: text,}
}

export let addDialogsMessageActionCreator = (text) => {
    return {type: ADD_DIALOGS_MESSAGE, message: text,}
}
// window.store = store;
export default store;

