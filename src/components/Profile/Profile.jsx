import React from 'react'
import styles from "./Profile.module.css";
import AvaSection from './AvaSection/AvaSection';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Navigate } from 'react-router-dom';


const Profile = (props) => {
  // if (!props.isAuth) {
  //   return <Navigate to="/login/"/>
  // }
  return (    
    <div>
      <AvaSection userProfile={props.userProfile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;