import React from "react";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialogItem }>Dimych</div>
                <div className={styles.dialogItem}>Andrey</div>
                <div className={styles.dialogItem + " " + styles.active}>Sveta</div>
                <div className={styles.dialogItem}>Sasha</div>
                <div className={styles.dialogItem}>Victor</div>
                <div className={styles.dialogItem}>Valera</div>
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
