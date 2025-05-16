import { combineReducers, legacy_createStore } from "../../node_modules/redux/dist/redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    
    });
const store = legacy_createStore(reducers);

export default store