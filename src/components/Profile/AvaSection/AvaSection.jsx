import React from "react";
import styles from "./AvaSection.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const AvaSection = (props) => {

  if (!props.userProfile) {    
    return <Preloader></Preloader>
  } else {
    return (
      <div>
        <div className={styles.contentTopImg}></div>
        <div className={styles.userImageBlock}>
          <img src={props.userProfile.photos.large}></img>           
          <div className={styles.userDescription}>{props.userProfile.fullName} </div>
        </div>
        <ProfileStatus status={"Learning how to code..."}/>
      </div>
    )
  }
    
  
}

export default AvaSection