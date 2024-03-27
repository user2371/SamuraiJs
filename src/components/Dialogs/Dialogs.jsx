import React, { Children } from "react";
import styles from "./Dialogs.module.css"
import { NavLink } from "../../../node_modules/react-router-dom/dist/index";

const activeLink = ({isActive}) => isActive ? styles.active : undefined;

const Dialogs = (props) => {
     return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/1" className={activeLink}>Dimych</NavLink>
                </div>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/2" className={activeLink}>Andrey</NavLink>
                </div>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/3" className={activeLink}>Sveta</NavLink>
                </div>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/4" className={activeLink}>Sasha</NavLink>
                </div>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/5" className={activeLink}>Victor</NavLink>
                </div>
                <div className={styles.dialogItem}>
                    <NavLink to="/dialogs/6" className={activeLink}>Valera</NavLink>
                </div>
            </div>
            <div className={styles.dialogMessages}>
                <div className={styles.dialogMessage}>Hi</div>
                <div className={styles.dialogMessage}>What's up</div>
                <div className={styles.dialogMessage}>Good bye</div>
            </div>
        </div>
    )
}

export default Dialogs;
