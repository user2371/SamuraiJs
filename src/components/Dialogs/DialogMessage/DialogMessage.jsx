import React from "react";
import { NavLink } from "../../../../node_modules/react-router-dom/dist/index";
import styles from "./DialogMessage.module.css"


const DialogMessage = (props) => {
    return (
        <div className={styles.dialogMessage}>{props.message}</div>
    )
}

export default DialogMessage;