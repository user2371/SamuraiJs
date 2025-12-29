import React, { useState } from "react";
import styles from "./AvaSection.module.css";
import Preloader from "../../common/Preloader/Preloader";
import UserStatusHooks from "./UserStatusHooks";
import userIcon from "../../../assets/images/userIcon.png";
import { ProfileData } from "./ProfileData";
import { ProfileDataForm, ProfileDataReduxForm } from "./ProfileDataForm";

const AvaSection = (props) => {
  const [editMode, setEditMode] = useState(false)
  function onMainPhotoSelected(evt) {
    if (evt.target.files.length > 0) {
      props.savePhotoThunkCreator(evt.target.files[0]);
    }
  }

  function onCustomSubmit (formData) {
    console.log(formData)
    props.saveProfile(formData)
  }

  if (!props.userProfile) {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
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
        <button onClick={()=> 
          (!editMode && props.isOwner)? setEditMode(true) : setEditMode(false)
          }
          >edit profile</button>
        {editMode ? <ProfileDataReduxForm initialValues={props.userProfile} onSubmit={onCustomSubmit} userProfile={props.userProfile}/> : <ProfileData userProfile={props.userProfile}/>}
          
        <UserStatusHooks
          userStatus={props.userStatus}
          updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
        />
      </div>
    );
  }
};

export default AvaSection;
