import { combineReducers, legacy_createStore } from "../../node_modules/redux/dist/redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let reducers = combineReducers({profilePage: profileReducer, messagesPage: messagesReducer});
const store = legacy_createStore(reducers);

export default store