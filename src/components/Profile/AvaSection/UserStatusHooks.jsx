import React from "react";
import { useState } from 'react';
import styles from './AvaSection.module.css'

const UserStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setUserStatus] = useState(props.userStatus)

    function activateEditMode () {
        setEditMode(true)
    }

     function deavtivateEditMode () {
        setEditMode(false)
        props.updateUserStatusThunkCreator(userStatus)
    }
     function onStatusChange (evt) {
        setUserStatus(evt.currentTarget.value)
    }
    return (
        <div>
            { !editMode
                ? <div>
                    <span onClick={activateEditMode}>{props.userStatus || "------"}</span>
                </div>
                : <div className={styles.profileStatusInput}>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deavtivateEditMode} value={userStatus} />
                </div>
            }

        </div>
    )
}

export default UserStatusHooks