import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/messages-reducer";


const Dialogs = (props) => {
    let dialogMessagesTextarea = React.createRef()
    let dialogsComponents = props.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesData.map((message) => <DialogMessage message={message.message} />)

    let newMessageChange = (evt) => {
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
                <div><textarea onChange={newMessageChange} value={props.newMessageText}></textarea></div>
                <button onClick={sendMessageClick}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
