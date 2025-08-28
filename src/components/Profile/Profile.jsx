import React from 'react'
import styles from "./Profile.module.css";
import AvaSection from './AvaSection/AvaSection';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (    
    <div>
      <AvaSection savePhotoThunkCreator={props.savePhotoThunkCreator} isOwner={props.isOwner} userProfile={props.userProfile} userStatus={props.userStatus} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;