import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Dimych", },
        { id: 2, name: "Andrey", },
        { id: 3, name: "Sveta", },
        { id: 4, name: "Sasha", },
        { id: 5, name: "Victor", },
        { id: 6, name: "Valera", },
    ];

    let messagesData = [
        { id: 1, message: "Hi", },
        { id: 2, message: "What's up", },
        { id: 3, message: "Good bye", },
    ]
    let dialogsComponents = dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesComponents = messagesData.map((message) => <DialogMessage message={message.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsComponents}
            </div>
            <div className={styles.dialogMessages}>
                {messagesComponents}
            </div>
        </div>
    )
}

export default Dialogs;
