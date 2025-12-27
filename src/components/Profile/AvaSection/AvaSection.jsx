import React from "react";
import styles from "./AvaSection.module.css"
import Preloader from "../../common/Preloader/Preloader";
import UserStatusHooks from "./UserStatusHooks";
import userIcon from "../../../assets/images/userIcon.png"

const AvaSection = (props) => {
  function onMainPhotoSelected (evt) {
    if(evt.target.files.length > 0) {
      props.savePhotoThunkCreator(evt.target.files[0])
    }
  }

  if (!props.userProfile) {    
    return <Preloader></Preloader>
  } else {
    return (
      <div className={styles.avaSection}>
        <div className={styles.contentTopImg}></div>
        <div className={styles.userImageBlock}>
          <img src={props.userProfile.photos.large || userIcon}></img>   
          {props.isOwner ? <input type="file" onChange={onMainPhotoSelected}/> : null}        
          <div className={styles.userDescription}>{props.userProfile.fullName} </div>
        </div>
        <UserStatusHooks userStatus={props.userStatus} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
      </div>
    )
  }
    
  
}

export default AvaSection