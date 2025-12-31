import React from "react";
import styles from "./AvaSection.module.css";
import Preloader from "../../common/Preloader/Preloader";
import UserStatusHooks from "./UserStatusHooks";
import userIcon from "../../../assets/images/userIcon.png";

const AvaSection = (props) => {
  debugger
  function onMainPhotoSelected(e) {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      props.updateUserPhotoThunkCreator(props.userProfile.id, imageUrl);
    }
  }
  if (!props.userProfile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div className={styles.avaSection}>
        <div className={styles.contentTopImg}></div>
        <div className={styles.userImageBlock}>
          <img src={props.userProfile.photos.large || userIcon}></img>
          {props.isOwner ? (
            <input type="file" onChange={onMainPhotoSelected} />
          ) : null}
          <div className={styles.userDescription}>
            {props.userProfile.fullName}{" "}
          </div>
        </div>
        <UserStatusHooks
          userStatus={props.userStatus}
          userId={props.userProfile.id}
          updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
          isOwner={props.isOwner}
        />
      </div>
    );
  }
};

export default AvaSection;
