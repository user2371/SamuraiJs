import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    debugger
    
    let dialogsComponents = props.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesData.map((message) => <DialogMessage message={message.message} />)

    let updateMessage = (evt) => {
        debugger
        let text = evt.target.value;
        props.onNewMessageChange(text)
    }
   

    let sendMessageClick = () => {
        props.onSendMessageClick()
    }
    debugger
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsComponents} 
            </div>
            <div className={styles.dialogMessages}>
                <div>{messagesComponents}</div>
                <div><textarea onChange={updateMessage} value={props.newMessageText}></textarea></div>
                <button onClick={sendMessageClick}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
