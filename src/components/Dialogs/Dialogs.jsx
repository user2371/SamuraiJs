import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";

const activeLink = ({ isActive }) => isActive ? styles.active : undefined;

const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} className={activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.dialogMessage}>{props.message}</div>
    )
}
let dialogsData = [
    {id: 1, name: "Dimych",},
    {id: 2, name: "Andrey",},
    {id: 3, name: "Sveta",},
    {id: 4, name: "Sasha",},
    {id: 5, name: "Victor",},
    {id: 6, name: "Valera",},
];

let messagesData = [
    {id: 1, message: "Hi",},
    {id: 2, message: "What's up",},
    {id: 3, message: "Good bye",},
]
let dialogsComponents = dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)
let messagesComponents = messagesData.map((message) => <Message message={message.message} />)

const Dialogs = (props) => {
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
