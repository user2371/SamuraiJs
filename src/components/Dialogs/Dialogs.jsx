import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    let dialogMessagesTextarea = React.createRef()
    let dialogsComponents = props.messagesPage.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesComponents = props.messagesPage.messagesData.map((message) => <DialogMessage message={message.message} />)

    let postNewMessage = () => {
        let newMessageValue = dialogMessagesTextarea.current.value;
        props.dispatch({type: "ADD-DIALOGS-MESSAGE", message: newMessageValue})
        newMessageValue = "";
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsComponents} 
            </div>
            <div className={styles.dialogMessages}>
                {messagesComponents}
                <textarea ref={dialogMessagesTextarea} ></textarea>
                <button onClick={postNewMessage}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;
