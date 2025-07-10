import React from 'react'
import styles from "./Profile.module.css";
import AvaSection from './AvaSection/AvaSection';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Navigate } from 'react-router-dom';


const Profile = (props) => {
  
   
  return (    
    <div>
      <AvaSection userProfile={props.userProfile} userStatus={props.userStatus} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;