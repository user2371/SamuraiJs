import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { Navigate } from "react-router-dom";
import DialogsMessageForm from "./DialogsMessageForm";


const Dialogs = (props) => {    
    let dialogsComponents = props.dialogsData.map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesData.map((message) => <DialogMessage key={message.id} message={message.message} />)


    let customOnSubmit = (value) => {
        props.onSendMessageClick(value.DialogsMessageText)
        console.log(value.DialogsMessageText)
    }

    return (
        
        <div className={styles.dialogs}>
            
            <div className={styles.dialogItems}>
                <div className={styles.dialogsTitle}>Contacts:</div>
                {dialogsComponents} 
            </div>
            <div className={styles.dialogMessages}>
                <div className={styles.chatTitle}>Chat</div>
                <div>{messagesComponents}</div>
                <DialogsMessageForm onSubmit={customOnSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;
