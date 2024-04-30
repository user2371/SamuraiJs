import React from 'react'
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'
import AvaSection from './AvaSection/AvaSection';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (    
    <div>
      <AvaSection />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;