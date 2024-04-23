import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../Redux/messages-reducer";


const Dialogs = (props) => {
    let dialogMessagesTextarea = React.createRef()
    let dialogsComponents = props.messagesPage.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesPage.messagesData.map((message) => <DialogMessage message={message.message} />)

    let onNewMessageChange = (evt) => {
        let text = evt.target.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let postNewMessage = () => {
        let newMessageValue = dialogMessagesTextarea.current.value;
        props.dispatch()
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsComponents} 
            </div>
            <div className={styles.dialogMessages}>
                <div>{messagesComponents}</div>
                <div><textarea onChange={onNewMessageChange} value={props.messagesPage.newMessageText}></textarea></div>
                <button onClick={onSendMessageClick}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
