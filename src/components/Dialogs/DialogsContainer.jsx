import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messages-reducer";

import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    
    return (
        <Dialogs
            dialogsData={state.dialogsData}
            messagesData={state.messagesData}
            onNewMessageChange={onNewMessageChange}
            onSendMessageClick={onSendMessageClick}

        />)
}

export default DialogsContainer;
