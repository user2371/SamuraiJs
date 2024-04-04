import React from "react";
import { NavLink } from "../../../../node_modules/react-router-dom/dist/index";
import styles from "./DialogMessage.module.css"


const DialogMessage = (props) => {
    return (
        <div className={styles.dialogMessage}>{props.message} 
        <div className={styles.arrow2}></div>
        <div className={styles.arrow}></div>
        </div>
        
    )
}

export default DialogMessage;