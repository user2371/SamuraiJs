import React from "react";
import { NavLink } from "../../../../node_modules/react-router-dom/dist/index";
import styles from "./DialogItem.module.css"

const activeLink = ({ isActive }) => isActive ? styles.active : undefined;
const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} className={activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;