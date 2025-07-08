import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {    
    let dialogsComponents = props.dialogsData.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesData.map((message) => <DialogMessage key={message.id} message={message.message} />)

    let updateMessage = (evt) => {
        let text = evt.target.value;
        props.onNewMessageChange(text)
    }   

    let sendMessageClick = () => {
        props.onSendMessageClick()
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsComponents} 
            </div>
            <div className={styles.dialogMessages}>
                <div>{messagesComponents}</div>
                <div><textarea className={styles.dialogsTextarea} onChange={updateMessage} value={props.newMessageText}></textarea></div>
                <button onClick={sendMessageClick}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
