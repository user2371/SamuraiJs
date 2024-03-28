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

let messageData = [
    {id: 1, message: "Hi",},
    {id: 2, message: "What's up",},
    {id: 3, message: "Good bye",},
]

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
            </div>
            <div className={styles.dialogMessages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;
