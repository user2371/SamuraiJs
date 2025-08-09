import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    form: formReducer,
    app: appReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));


export default store

