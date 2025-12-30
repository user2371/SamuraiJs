import React from 'react'
import styles from "./Profile.module.css";
import AvaSection from './AvaSection/AvaSection';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (    
    <div>
      <AvaSection savePhotoThunkCreator={props.savePhotoThunkCreator} updateUserPhotoMock={props.updateUserPhotoMock} isOwner={props.isOwner} userProfile={props.userProfile} userStatus={props.userStatus} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator} updateUserPhotoThunkCreator={props.updateUserPhotoThunkCreator}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;