import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./AvaSection.module.css";

const UserStatusHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);

  useEffect(() => {
    setUserStatus(props.userStatus);
  }, [props.userStatus]);

  function activateEditMode() {
    if (!props.isOwner) {
      return;
    }
    setEditMode(true);
  }

  function deavtivateEditMode() {
    setEditMode(false);
    props.updateUserStatusThunkCreator(props.userId, userStatus);
    console.log("UPDATE STATUS:", userStatus, "userId", props.userId);
  }
  function onStatusChange(evt) {
    setUserStatus(evt.currentTarget.value);
  }
  return (
    <>
        <div>Status:</div>
      <div>
        {!editMode ? (
          <div>
            <span onClick={activateEditMode} className={styles.statusField}>
              {props.userStatus || "------"}
            </span>
          </div>
        ) : (
          <div className={styles.profileStatusInput}>
            <input
              autoFocus={true}
              onChange={onStatusChange}
              onBlur={deavtivateEditMode}
              value={userStatus}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UserStatusHooks;

// В цьому уроці була тількт теорія по Virtual DOM. Коду ніякого не пислаи
