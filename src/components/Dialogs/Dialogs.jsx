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
const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem id="1" name="Dimych" />
                <DialogItem id="2" name="Andrey" />
                <DialogItem id="3" name="Sveta" />
                <DialogItem id="4" name="Sasha" />
                <DialogItem id="5" name="Victor" />
                <DialogItem id="6" name="Valera" />
            </div>
            <div className={styles.dialogMessages}>
                <Message message="Hi" />
                <Message message="What's up" />
                <Message message="Good bye" />
            </div>
        </div>
    )
}

export default Dialogs;
