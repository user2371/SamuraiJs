import React from "react";
import styles from "./AvaSection.module.css"
import Preloader from "../../common/Preloader/Preloader";

const AvaSection = (props) => {

  if (!props.userProfile) {    
    return <Preloader></Preloader>
  } else {
    return (
      <div>
        <div className={styles.contentTopImg}></div>
        <div>
          <img src={props.userProfile.photos.large}></img>  
          <div>Ava + description </div>
        </div>
      </div>
    )
  }
    
  
}

export default AvaSection