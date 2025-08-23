import React from "react";
import styles from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? styles.active : undefined;
const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} className={activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;