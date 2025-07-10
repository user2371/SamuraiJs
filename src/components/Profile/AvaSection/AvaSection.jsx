import React from "react";
import styles from "./AvaSection.module.css"
import Preloader from "../../common/Preloader/Preloader";
import UserStatusComponent from "./UserStatusComponent";

const AvaSection = (props) => {

  if (!props.userProfile) {    
    return <Preloader></Preloader>
  } else {
     debugger
    return (
      <div>
        <div className={styles.contentTopImg}></div>
        <div className={styles.userImageBlock}>
          <img src={props.userProfile.photos.large}></img>           
          <div className={styles.userDescription}>{props.userProfile.fullName} </div>
        </div>
        <UserStatusComponent userStatus={props.userStatus} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} />
      </div>
    )
  }
    
  
}

export default AvaSection